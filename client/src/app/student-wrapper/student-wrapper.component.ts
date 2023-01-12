import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from  '@angular/material/dialog'
import { StudentFormComponent } from './student-form/student-form.component';
@Component({
  selector: 'app-student-wrapper',
  templateUrl: './student-wrapper.component.html',
  styleUrls: ['./student-wrapper.component.css']
})

export class StudentWrapperComponent {

  constructor(private _dialog: MatDialog) {

  }

  openform() {
    this._dialog.open(StudentFormComponent, {
      width:'70%',
      height:'70%'
    }) 
  }
}
