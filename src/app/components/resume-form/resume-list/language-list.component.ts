import {Component, Input} from '@angular/core';
import {Skill} from '../../../models/skill';
import {Language} from '../../../models/language';

@Component({
  selector: 'app-language-list',
  template: `
    <app-language-card *ngFor="let  language of languageList"
                       [language]="language"></app-language-card>
  `,
  styles: [``]
})

export class LanguageListComponent {
  @Input() languageList: Language[];

  constructor() {
  }
}
