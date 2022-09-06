import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoListService} from "../../../services/todo-list.service";

class ToDoLists {
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  constructor( private todoListService: TodoListService ) { };

  @Output() sortBYEvent: EventEmitter<any> = new EventEmitter<any>;

 // public value: string = '';
 public selectedValue!: string;

  valueTodo: {value: string, viewValue: string}[] = [
    {value: 'sortTitle', viewValue: 'Title'},
    {value: 'sortDate', viewValue: 'Deadline Date'},
    {value: 'sortActive', viewValue: 'Active'},
    {value: 'sortFinished', viewValue: 'Finished'},
  ];





  ngOnInit(): void {
  }

  public sortBy(): void {
      if (this.selectedValue == 'sortFinished') {
        this.todoListService.sortByFinishedTodo();
        this.sortBYEvent.emit();
      } else if (this.selectedValue == 'sortActive') {
        this.todoListService.sortByActiveTodo();
        this.sortBYEvent.emit();
      } else if (this.selectedValue == 'sortDate') {
        this.todoListService.sortByDateTodo();
        this.sortBYEvent.emit();
      } else if (this.selectedValue == 'sortTitle') {
        this.todoListService.sortByTitleTodo();
        this.sortBYEvent.emit();
      }
  }
}
