import {Component, OnInit} from '@angular/core';
import {AppInterface} from "./interfaces/app.interface";
import {TodoListService} from "./services/todo-list.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ConfirmModalComponent} from "./core/components/modals/confirm-modal/confirm-modal.component";
import {EditModalComponent} from "./core/components/modals/edit-modal/edit-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public todoList : AppInterface[]  = []
  constructor(
    private TodoListService: TodoListService,
    private dialog: MatDialog,
  ) {
  }

  title = 'myfirstapp';


  public ngOnInit(): void {
    this.initTodoList();
  }

  public handleUpdate(name: string): void {
    this.TodoListService.setNewTodo = name;
    this.initTodoList();
  }

  public changeTodoStatus(todo: AppInterface): void {
    this.TodoListService.setNewTodoStatusById = todo.id;
    this.initTodoList();
  }

  public delTodo(todo: AppInterface): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '300px';
    dialogConfig.height = '200px';
    dialogConfig.enterAnimationDuration = '200ms';
    dialogConfig.exitAnimationDuration= '200ms';
      const dialogRef = this.dialog.open(ConfirmModalComponent, dialogConfig);
      dialogRef.afterClosed().subscribe( (result: boolean) => {
        if (result) {
          this.TodoListService.deleteTodoById(todo.id);
          this.initTodoList();
        }

      })


  }

  public editTodo(todo: AppInterface): void {
      const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '550px';
    dialogConfig.height = '500px';
    dialogConfig.enterAnimationDuration = '200ms';
    dialogConfig.exitAnimationDuration = '200ms';
    dialogConfig.data = todo;

    const dialogRef =  this.dialog.open(EditModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe( (result) => {
      if (result) {
        this.TodoListService.updateTodoById(todo.id, result);
        this.initTodoList();
      }
    })

  }

  private initTodoList(): void {
    this.todoList = this.TodoListService.getTodoList;
  }

 public filterTodo(): void {
    this.todoList = this.TodoListService.getFinishedList();
  }
}
