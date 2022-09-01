import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {TodoListService} from "../../../services/todo-list.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor( private TodoListService: TodoListService) {
  }
  @Output() updatedEvent: EventEmitter<string> = new EventEmitter<string>;
  @Output() filterEvent: EventEmitter<any> = new EventEmitter<any>;

  public todoControl: FormControl = new FormControl('', [Validators.required]);

  // constructor(private todoListService: TodoListService) { }


  public createTodo(): void {
    this.updatedEvent.emit(this.todoControl.value);
    this.todoControl.reset('');
  }

  public showAll(): void {
    this.TodoListService.allTodo();
    this.filterEvent.emit();
  }

  public showFinished(): void {
    this.TodoListService.filterFinished();
    this.filterEvent.emit();
  }

 public showActive(): void {
   this.TodoListService.activeFil();
   this.filterEvent.emit();
  }

  public sortTodo() : void {
    this.filterEvent.emit();
  }
}
