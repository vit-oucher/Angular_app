import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {AppInterface} from "../../../interfaces/app.interface";

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit, OnChanges {
  @Input() cardNumber : number = 0;
  @Input() todoCard!: AppInterface;

  @Output () changeTodoStatus: EventEmitter<void> = new EventEmitter<void>();
  @Output () deleteTodoEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output () editTodoEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  public ngOnChanges(): void {
  }

  public ngOnInit(): void {
  }

  public editTodo():void {
    console.log('Card edited', this.todoCard );
    this.editTodoEvent.emit();
  }

  public deleteTodo():void {
    console.log('Card deleted', this.todoCard );
    this.deleteTodoEvent.emit();
  }

 public todoStatusChange(): void {
    this.changeTodoStatus.emit();
  }
}
