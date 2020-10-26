import {Component} from '@angular/core';

@Component({
  selector: 'app-on-boarding',
  template: `
    <mat-horizontal-stepper>
      <mat-step>
        <ng-template matStepLabel>Name your Resume</ng-template>
        <app-resume-name></app-resume-name>
      </mat-step>
    </mat-horizontal-stepper>
  `,
  styles: [``]
})

export class OnBoardingComponent {

  constructor() {
  }
}
