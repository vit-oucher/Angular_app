import {Injectable} from "@angular/core";
import {AppInterface} from "../interfaces/app.interface";

@Injectable({
  providedIn: "root",
})

export class TodoListService {
  private filteredList :  AppInterface[]  = [];

  private todoList : AppInterface[]  = [
    {
      isTodoFinished: false,
      id: 1,
      cardText: 'do homework',
      dateOfCreation : new Date(),
      DeadlineDate : new Date(),
    },
    {
      isTodoFinished: false,
      id: 2,
      cardText: 'do homework js',
      dateOfCreation : new Date(),
      DeadlineDate : new Date(),
    },
    {
      isTodoFinished: false,
      id: 3,
      cardText: 'do homework angular',
      dateOfCreation : new Date(),
      DeadlineDate : new Date(),
    }
  ];


  public get getTodoList() : AppInterface[] {
    return this.todoList;
  }

  public set setNewTodo(todoText: string) {
    const newTodo: AppInterface = {
      isTodoFinished: false,
      cardText: todoText,
      dateOfCreation : new Date(),
      id: Math.ceil(Math.random() * 1000),
    }
    this.todoList = [...this.todoList, newTodo];
  }
  public set setNewTodoStatusById(id: number) {
    this.todoList = this.todoList.map((el: AppInterface) => {
      return {
        ...el,
        isTodoFinished: el.id === id ? !el.isTodoFinished : el.isTodoFinished,
      }
    })
  }
  public deleteTodoById(id: number):void {
    this.todoList = this.todoList.filter((el: AppInterface) => el.id !== id);

  }

  public updateTodoById(id:number,
       newDates: {cardText: string, DeadlineDate: Date}
  ): void {
            this.todoList = this.todoList.map((el: AppInterface) =>
              ({...el,
                cardText: el.id === id ? newDates.cardText : el.cardText,
                DeadlineDate: el.id === id ? newDates.DeadlineDate : el.DeadlineDate,
            }));
  }
  public filterFinished(): void {
    this.filteredList = this.todoList.filter((el: AppInterface) =>
      el.isTodoFinished == true);
  }
  public getFinishedList() : AppInterface[] {
    return this.filteredList;
  }

  public activeFil(): void{
    this.filteredList = this.todoList.filter((el: AppInterface) =>
      el.isTodoFinished == false);
  }

  public allTodo():void {
    this.filteredList = this.todoList;
  }

  public sortByFinishedTodo():void {
    this.filteredList = this.todoList.sort((a:any,b: any) => a.isTodoFinished < b.isTodoFinished ? 1 : -1 );
  }
  public sortByActiveTodo():void {
    this.filteredList = this.todoList.sort((a:any,b: any) => a.isTodoFinished > b.isTodoFinished ? 1 : -1 );
  }
  public sortByDateTodo():void {
    this.filteredList = this.todoList.sort((a:any,b: any) => a.DeadlineDate > b.DeadlineDate ? 1 : -1 );
  }
  public sortByTitleTodo():void {
    this.filteredList = this.todoList.sort((a:any,b: any) => a.cardText > b.cardText ? 1 : -1 );
  }
}
