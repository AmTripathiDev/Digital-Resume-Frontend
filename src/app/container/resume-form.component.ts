import {Component, Input} from '@angular/core';
import {Resume} from '../models/resume';

@Component({
  selector: 'app-resume-form',
  template: `
    <mat-accordion fxLayout="column" fxLayoutAlign="center center">
      <h1 class="tabs-heading res-expansion-title">Enter details which you want to see on your Resume</h1>
      <mat-expansion-panel>
        <mat-expansion-panel-header class="res-mat-expansion-panel-header">
          <mat-panel-title>
            Contact Details
          </mat-panel-title>
          <mat-panel-description>
            Enter your Contact Details
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-contact-details [resumeId]="resume._id" [contactDetails]="resume.contact_details"></app-contact-details>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header class="res-mat-expansion-panel-header">
          <mat-panel-title>
            Education
          </mat-panel-title>
          <mat-panel-description>
            Enter your Qualification
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-education [resumeId]="resume._id" [educations]="resume.education"></app-education>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: [`
    h1 {
      text-align: center;
      margin-top: 2%;
      margin-bottom: 3%;
    }

    mat-expansion-panel {
      width: 90%;
    }


  `]
})

export class ResumeFormComponent {
  @Input() resume: Resume;

  constructor() {
  }
}

