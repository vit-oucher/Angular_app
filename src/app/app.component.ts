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
}
