import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {
 @Input() textControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  public resetControl(): void {
    this.textControl.reset('')
  }
}
