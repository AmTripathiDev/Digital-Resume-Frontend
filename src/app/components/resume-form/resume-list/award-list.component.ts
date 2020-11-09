import {Component, Input} from '@angular/core';
import {AwardsAchivement} from '../../../models/awards-achivement';

@Component({
  selector: 'app-award-list',
  template: `
    <app-award-card *ngFor="let data of awardList"
                    [award]="data"></app-award-card>
  `,
  styles: [``]
})

export class AwardListComponent {
  @Input() awardList: AwardsAchivement[];

  constructor() {
  }
}
