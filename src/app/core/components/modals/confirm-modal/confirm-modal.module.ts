import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {ButtonModule} from "../../button/button.module";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    ConfirmModalComponent
  ],
    imports: [
        CommonModule,
        MatDialogModule,
        ButtonModule,
        MatButtonModule,
    ]
})
export class ConfirmModalModule { }
