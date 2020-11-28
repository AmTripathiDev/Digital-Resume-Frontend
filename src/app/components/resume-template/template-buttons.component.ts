import {Component} from '@angular/core';

@Component({
  selector: 'app-template-buttons',
  template: `
    <div fxLayout="row" fxLayoutAlign="center center" fxLayoutGap="30px">
      <button mat-mini-fab matTooltip="edit resume">
        <mat-icon>assignment</mat-icon>
      </button>
      <button mat-mini-fab matTooltip="edit profile image or vide">
        <mat-icon>videocam</mat-icon>
      </button>
      <button mat-mini-fab matTooltip="share resume">
        <mat-icon>share</mat-icon>
      </button>
    </div>
  `,
  styles: [`
    button {
      background: #f1c232 !important;
      color: black !important;
    }
  `]
})

export class TemplateButtonsComponent {

  constructor() {
  }
}
