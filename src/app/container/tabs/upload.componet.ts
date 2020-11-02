import {Component, Input} from '@angular/core';
import {Resume} from '../../models/resume';

@Component({
  selector: 'app-upload',
  template: `
    <div fxLayout="column" fxLayoutAlign="start center">
      <mat-tab-group mat-align-tabs="center" style="width: 100%" dynamicHeight color="primary" backgroundColor="accent">
        <mat-tab label="UPLOAD PROFILE IMAGE">
          <app-upload-image [resume]="resume"></app-upload-image>
        </mat-tab>
        <mat-tab label="UPLOAD EXISTING VIDEO">
          <app-upload-from-disk></app-upload-from-disk>
        </mat-tab>
        <mat-tab label="PASTE YOUTUBE LINK">
          <app-import-youtube [resume]="resume"></app-import-youtube>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
  `]
})

export class UploadComponent {
  @Input() resume: Resume;

  constructor() {
  }

}
