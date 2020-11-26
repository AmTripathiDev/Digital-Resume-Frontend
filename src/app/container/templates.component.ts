import {Component} from '@angular/core';
import {Utility} from '../utility/utility';

@Component({
  selector: 'app-templates',
  template: `
    <div fxLayout="column" fxLayoutGap="20px"
         fxLayoutAlign="center stretch">
      <div fxLayout="row wrap"
           fxLayoutAlign="start center" fxLayoutGap="30px">
        <app-template-card [template]="template"
                           *ngFor="let template of templates"></app-template-card>
      </div>
    </div>
  `,
  styles: [`
  `]
})

export class TemplatesComponent {
  templates = Utility.Templates;

  constructor() {
  }
}
