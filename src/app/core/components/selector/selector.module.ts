import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
    declarations: [
        SelectorComponent
    ],
    exports: [
        SelectorComponent
    ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class SelectorModule { }
