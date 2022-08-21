import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBoxComponent } from './input-box.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";



@NgModule({
    declarations: [
        InputBoxComponent
    ],
    exports: [
        InputBoxComponent
    ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class InputBoxModule { }
