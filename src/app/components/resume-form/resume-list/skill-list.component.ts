import {Component, Input} from '@angular/core';
import {Skill} from '../../../models/skill';

@Component({
  selector: 'app-skill-list',
  template: `
    <app-skill-card *ngFor="let skill of skillList"
                    [skill]="skill"></app-skill-card>
  `,
  styles: [``]
})

export class SkillListComponent {
  @Input() skillList: Skill[];

  constructor() {
  }
}
