import { Component, OnInit } from '@angular/core';

class ToDoLists {
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
 public value: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
