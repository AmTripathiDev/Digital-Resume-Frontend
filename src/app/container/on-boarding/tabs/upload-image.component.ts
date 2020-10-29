import {Component, ElementRef, ViewChild} from '@angular/core';
import {AlertService} from '../../../services/alert-service';

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
      <img height="200px" #previewImg [src]="this.url">
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
  @ViewChild('previewImg') previewImg: ElementRef;
  file: File;
  MAX_IMAGE_SIZE = 2 * 1000 * 1000;
  url = '';

  constructor(private alertService: AlertService) {
  }

  onImageSelect(value) {
    const file = value.target.files[0];
    this.file = file;
    if (this.file.size > this.MAX_IMAGE_SIZE) {
      return this.alertService.error('File size should be less than 2mb');
    }
    if (file.type === 'image/png' || 'image/jpg' || 'image/jpeg' || 'image/JPG') {
      this.isSelected = true;
      this.selectButtonIcon = 'cached';
      this.previewImg.nativeElement.src = window.URL.createObjectURL(this.file);
    } else {
      return this.alertService.error('Image must be of type png,jpg or jpeg');
    }
  }

  onFileSelect() {
    this.fileInput.nativeElement.click();
  }
}
