import {Injectable} from "@angular/core";
import {AppInterface} from "../interfaces/app.interface";

@Injectable({
  providedIn: "root",
})

export class TodoListService {
  private todoList : AppInterface[]  = [
    {
      isTodoFinished: false,
      id: 1,
      cardText: 'do homework',
      dateOfCreation : new Date(),
      DeadlineDate : new Date(),
    }
  ];


  public get getTodoList() : AppInterface[] {
    return this.todoList;
  }

}
