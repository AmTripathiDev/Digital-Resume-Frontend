import {Component} from '@angular/core';

@Component({
  selector: 'app-on-boarding',
  template: `
    <mat-horizontal-stepper>
      <mat-step>
        <ng-template matStepLabel>Step 1</ng-template>
        <h1>Hello this is inside step 1</h1>
      </mat-step>
      <mat-step>
        <ng-template matStepLabel>Step 2</ng-template>
        <h1>Hello this is inside step 2</h1>
      </mat-step>
      <mat-step>
        <ng-template matStepLabel>Step 3</ng-template>
        <h1>Hello this is inside step 3</h1>
      </mat-step>
    </mat-horizontal-stepper>
  `,
  styles: [``]
})

export class OnBoardingComponent {

  constructor() {
  }
}
