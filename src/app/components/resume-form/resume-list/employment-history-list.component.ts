import {Component, Input} from '@angular/core';
import {EmploymentHistory} from '../../../models/employment-history';

@Component({
  selector: 'app-employment-history-list',
  template: `
    <app-employment-history-card *ngFor="let data of employmentHistoryList" [employmentHistory]="data"></app-employment-history-card>
  `,
  styles: [``]
})

export class EmploymentHistoryListComponent {
  @Input() employmentHistoryList: EmploymentHistory[];

  constructor() {
  }
}
