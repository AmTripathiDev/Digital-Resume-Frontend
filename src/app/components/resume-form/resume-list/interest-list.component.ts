import {Component, Input} from '@angular/core';
import {Interest} from '../../../models/interest';

@Component({
  selector: 'app-interest-list',
  template: `
    <app-interest-card *ngFor="let interest of this.interestList"
                       [interest]="interest"></app-interest-card>
  `,
  styles: [``]
})

export class InterestListComponent {
  @Input() interestList: Interest[];

  constructor() {
  }
}
