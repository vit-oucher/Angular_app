import {Component, OnInit} from '@angular/core';
import {AppInterface} from "./interfaces/app.interface";
import {TodoListService} from "./services/todo-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public todoList : AppInterface[]  = []
  constructor(private TodoListService: TodoListService) {
  }

  title = 'myfirstapp';


  public ngOnInit(): void {
    this.todoList = this.TodoListService.getTodoList;
  }

  public handleUpdate(name: string): void {
    this.TodoListService.setNewTodo = name;
    this.todoList = this.TodoListService.getTodoList;
  }

  public changeTodoStatus(todo: AppInterface): void {
    this.TodoListService.setNewTodoStatusById = todo.id;
    this.todoList = this.TodoListService.getTodoList;
  }

  public delTodo(todo: AppInterface): void {
    this.TodoListService.deleteTodoById(todo.id);
    this.todoList = this.TodoListService.getTodoList;
  }
}
