import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Resume} from '../../../models/resume';

@Component({
  selector: 'app-contact-detail',
  template: `
    <h1>Hello i am inside a dialog</h1>
  `,
  styles: [``]
})

export class ContactDetailFormComponent {

  constructor(private dialogRef: MatDialogRef<ContactDetailFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Resume) {
    console.log(this.data);
  }
}
