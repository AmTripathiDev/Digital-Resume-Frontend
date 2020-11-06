import {Component, Input} from '@angular/core';
import {Education} from '../../../models/education';

@Component({
  selector: 'app-education-list',
  template: `
    <app-education-card *ngFor="let education of educationList" [education]="education"></app-education-card>
  `,
  styles: [``]
})

export class EducationListComponent {
  @Input() educationList: Education[];

  constructor() {
  }
}
