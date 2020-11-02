import {Component} from '@angular/core';

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

  constructor() {
  }
}

