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
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Employment History</mat-panel-title>
          <mat-panel-description>
            Enter Your Work Experience
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-employment-history [resumeId]="resume._id" [employmentHistories]="resume.employment_history"></app-employment-history>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header class="res-expansion-panel-width">
          <mat-panel-title>Hobbies & Interests</mat-panel-title>
          <mat-panel-description>
            Describe your hobbies and interest in detail
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-interest [resumeId]="this.resume._id" [interests]="resume.interests"></app-interest>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Professional Skills</mat-panel-title>
          <mat-panel-description>
            Describe your Skills
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-skills [skills]="resume.skills" [resumeId]="resume._id"></app-skills>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Languages</mat-panel-title>
          <mat-panel-description>
            Describe your known Languages
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-language [resumeId]="resume._id" [languages]="resume.languages"></app-language>
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

