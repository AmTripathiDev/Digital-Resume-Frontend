import {Component} from '@angular/core';

@Component({
  selector: 'app-upload',
  template: `
    <div fxLayout="column" fxLayoutAlign="start center">
      <mat-tab-group mat-align-tabs="center" style="width: 100%" dynamicHeight color="primary" backgroundColor="accent">
        <mat-tab label="UPLOAD PROFILE IMAGE"></mat-tab>
        <mat-tab label="UPLOAD EXISTING VIDEO"></mat-tab>
        <mat-tab label="PASTE YOUTUBE LINK"></mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
  `]
})

export class UploadComponent {

  constructor() {
  }
}
