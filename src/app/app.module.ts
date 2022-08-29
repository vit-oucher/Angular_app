import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderModule} from "./core/components/header/header.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TodoCardModule} from "./core/components/todo-card/todo-card.module";
import {ConfirmModalModule} from "./core/components/modals/confirm-modal/confirm-modal.module";
import {EditModalModule} from "./core/components/modals/edit-modal/edit-modal.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        HeaderModule,
        BrowserAnimationsModule,
        TodoCardModule,
        ConfirmModalModule,
        EditModalModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
