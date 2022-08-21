import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {ButtonModule} from "../button/button.module";
import {SelectorModule} from "../selector/selector.module";
import {InputBoxModule} from "../input-box/input-box.module";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SelectorModule,
    InputBoxModule
  ]
})
export class HeaderModule { }
