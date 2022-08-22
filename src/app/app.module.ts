import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderModule} from "./core/components/header/header.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TodoCardModule} from "./core/components/todo-card/todo-card.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        HeaderModule,
        BrowserAnimationsModule,
        TodoCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
