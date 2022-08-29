import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {TodoListService} from "../../../services/todo-list.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() updatedEvent: EventEmitter<string> = new EventEmitter<string>;

  public todoControl: FormControl = new FormControl('', [Validators.required]);

  // constructor(private todoListService: TodoListService) { }


  public createTodo(): void {
    this.updatedEvent.emit(this.todoControl.value);
    this.todoControl.reset('');
  }
}
