import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit, OnChanges {
  @Input() isTodoFinished : boolean = false;
  @Input() cardNumber : number = 0;
  @Input() cardText : string = 'do homework';
  @Input() dateOfCreation : Date = new Date();
  @Input() DeadlineDate : Date = new Date();



  constructor() { }

  public ngOnChanges(): void {
  }

  public ngOnInit(): void {
  }

  public editTodo():void {
    console.log('Card edited', this.cardText);
  }

  public deleteTodo():void {
    console.log('Card deleted', this.cardText);
  }

 public todoStatusChange(): void {
    this.isTodoFinished = !this.isTodoFinished;
  }
}
