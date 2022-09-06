import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AppInterface} from "../../../../interfaces/app.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});
  public modalData!: AppInterface;

  constructor(@Inject(MAT_DIALOG_DATA) private readonly data: AppInterface, private dialogRef: MatDialogRef<EditModalComponent>) { }

  ngOnInit(): void {
    this.modalData = this.data;
    this.initFormGroup();
  }

  public saveChanges(): void {
    this.dialogRef.close(this.formGroup.value);
  }

 public close(): void {
   this.dialogRef.close(false);
  }

private initFormGroup(): void {
    this.formGroup.setControl(
      'cardText',
      new FormControl(this.modalData.cardText, [Validators.required])
    );
    this.formGroup.setControl(
      'DeadlineDate',
      new FormControl(this.modalData.DeadlineDate || '', [Validators.required])
    );
}

}
