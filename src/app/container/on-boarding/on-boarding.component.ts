import {Component, OnInit} from '@angular/core';
import {Resume} from '../../models/resume';
import {ApiService} from '../../services/api-service';

@Component({
  selector: 'app-on-boarding',
  template: `
    <mat-horizontal-stepper *ngIf="!this.loading">
      <mat-step>
        <ng-template matStepLabel>Name your Resume</ng-template>
        <app-resume-name [isCompleted]="isFirstStepCompleted"></app-resume-name>
      </mat-step>
      <mat-step *ngIf="this.isFirstStepCompleted" optional>
        <ng-template matStepLabel>Upload Video & Image</ng-template>
        <app-upload [resume]="resume"></app-upload>
      </mat-step>
    </mat-horizontal-stepper>
    <div *ngIf="this.loading" style="height: 100vh" fxLayout="column" fxLayoutAlign="center center">
      <mat-spinner></mat-spinner>
    </div>
  `,
  styles: [``]
})

export class OnBoardingComponent implements OnInit {
  resume: Resume;
  isFirstStepCompleted = false;
  loading = true;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.fetchAllResumes().subscribe(data => {
      if (data.length) {
        this.resume = data[0];
        this.isFirstStepCompleted = true;
        this.loading = false;
      }
    });
  }
}
