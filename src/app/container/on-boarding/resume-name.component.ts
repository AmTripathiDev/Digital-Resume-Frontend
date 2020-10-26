import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-resume-name',
  template: `
    <div fxLayoutAlign="center center" fxLayout="column" class="overlay">
      <form (ngSubmit)="this.resumeForm.valid && this.createResume()" [formGroup]="this.resumeForm">
        <mat-card fxLayout="column" fxLayoutGap="20px" style="height:30vh;width: 25vw">
          <h1 style="font-size: 2rem">Name your Resume</h1>
          <mat-form-field>
            <input formControlName="name"
                   matInput placeholder="Resume Name"/>
            <mat-hint>It can't be seen by others</mat-hint>
            <mat-error>This field is Required</mat-error>
          </mat-form-field>
          <div fxLayoutAlign="end end">
            <button matStepperNext type="submit" mat-raised-button color="accent">NEXT</button>
          </div>
        </mat-card>
      </form>
    </div>
  `,
  styles: [``]
})

export class ResumeNameComponent implements OnInit {
  resumeForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.resumeForm = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
  }

  createResume() {
    console.log('called');
  }
}
