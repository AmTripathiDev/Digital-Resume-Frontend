import {Component} from '@angular/core';

@Component({
  selector: 'app-on-boarding',
  template: `

    <ng-container *ngTemplateOutlet="onBoarding"></ng-container>
    <ng-container *ngTemplateOutlet="card"></ng-container>
    <ng-container *ngTemplateOutlet="test"></ng-container>
    <ng-template #onBoarding>
      <h1>I am on boarding template</h1>
    </ng-template>
    <ng-template #card>
      <h1>I am card template</h1>
    </ng-template>
    <ng-template #test>
      <h1>I am test template</h1>
    </ng-template>
  `,
  styles: [``]
})

export class OnBoardingComponent {

  constructor() {
  }
}
