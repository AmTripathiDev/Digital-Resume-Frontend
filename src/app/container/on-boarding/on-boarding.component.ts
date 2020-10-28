import {Component} from '@angular/core';
import {Resume} from '../../models/resume';

@Component({
  selector: 'app-on-boarding',
  template: `
    <mat-horizontal-stepper>
      <mat-step>
        <ng-template matStepLabel>Name your Resume</ng-template>
        <app-resume-name></app-resume-name>
      </mat-step>
      <mat-step>
        <ng-template matStepLabel>Upload Video & Image</ng-template>
        <p>Upload Video and image</p>
      </mat-step>
    </mat-horizontal-stepper>
  `,
  styles: [``]
})

export class OnBoardingComponent {
  constructor() {
  }
}
