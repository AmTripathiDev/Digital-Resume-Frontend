import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-upload-image',
  template: `
    <div style="margin-top: 3%" fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="50px">
      <input (change)="onImageSelect($event)" accept="image/jpeg, image/png" #fileInput hidden type="file"/>
      <h1 style="font-weight: bolder;font-size: 2rem">
        <mat-icon>cloud_upload</mat-icon>
        Upload Profile Image
      </h1>
      <mat-hint style="font-size: 1rem">Image size must be upto 2mb</mat-hint>
      <button (click)="this.onFileSelect()" mat-raised-button color="primary" type="button" *ngIf="!isUploaded">
        <mat-icon>{{selectButtonIcon}}</mat-icon>
        <span *ngIf="!isSelected">SELECT</span>
        <span *ngIf="isSelected">CHANGE</span>
      </button>
    </div>
  `,
  styles: [`
    h1 {
      color: #538ec3;
    }
  `]
})

export class UploadImageComponent {
  isUploaded = false;
  isSelected = false;
  selectButtonIcon = 'add';
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor() {
  }

  onImageSelect(value) {
  }

  onFileSelect() {
    this.fileInput.nativeElement.click();
  }
}
