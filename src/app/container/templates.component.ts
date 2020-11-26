import {Component} from '@angular/core';
import {Utility} from '../utility/utility';

@Component({
  selector: 'app-templates',
  template: `
    <div  fxLayout="column" fxLayoutGap="20px"
         fxLayoutAlign="center stretch">
      <div fxLayout="row wrap"
           fxLayoutAlign="start center" fxLayoutGap="30px">
        <mat-card matRipple fxLayout="column"
                  *ngFor="let template of templates">
          <img mat-card-image [src]="template.src"/>
          <span style=" text-align: center;
      color: #538ec3;">{{template.name}}</span>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    mat-card {
      width: 240px;
      text-transform: uppercase;
      margin: 1rem 0;
      margin-left: 1rem;
    }

    img {
      width: 239px;
      height: 300px;
    }
  `]
})

export class TemplatesComponent {
  templates = Utility.Templates;

  constructor() {
  }
}
