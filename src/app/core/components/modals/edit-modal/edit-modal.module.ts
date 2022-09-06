import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditModalComponent } from './edit-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {InputBoxModule} from "../../input-box/input-box.module";
import {ButtonModule} from "../../button/button.module";
import {MatButtonModule} from "@angular/material/button";
import {DatePickerModule} from "../../date-picker/date-picker.module";



@NgModule({
  declarations: [
    EditModalComponent
  ],
    imports: [
        CommonModule,
        MatDialogModule,
        InputBoxModule,
        ButtonModule,
        MatButtonModule,
        DatePickerModule,
    ]
})
export class EditModalModule { }
