import {Component, Input} from '@angular/core';
import {Objective} from '../../../models/objective';

@Component({
  selector: 'app-objective-list',
  template: `
    <app-objective-card *ngFor="let data of this.objectives"
                        [objective]="data"></app-objective-card>
  `,
  styles: [``]
})

export class ObjectiveListComponent {
  @Input() objectives: Objective[];

  constructor() {
  }
}
