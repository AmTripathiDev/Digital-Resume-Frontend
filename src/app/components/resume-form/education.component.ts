import {Component, Input} from '@angular/core';
import {Education} from '../../models/education';
import {MatDialog} from '@angular/material/dialog';
import {EducationFormComponent} from './resume-dialogues/education-form.component';

@Component({
  selector: 'app-education',
  template: `
    <div fxLayout="column" fxLayoutGap="30px">
      <div style="position: relative" fxLayoutAlign="center center" fxLayout="column">
        <div class="cards-outer-div" fxLayout="column" fxLayoutAlign="center center">
          <ng-container>
            <h3 class="resume-form-info-card-heading">{{educations[0].field}}</h3>
            <h3 class="resume-form-info-card-heading">{{educations[0].degree_type}}</h3>
            <p class="resume-form-info-card-heading">{{educations[0].city}}</p>
            <p class="resume-form-info-card-heading">{{educations[0].school_name}}</p>
          </ng-container>
          <div fxLayoutAlign="center center">
            <div class="hover-container">
              <div class="hover">
                <button class="resume-form-mat-icon-button" mat-icon-button>
                  <mat-icon class="resume-form-mat-icon">create</mat-icon>
                </button>
                <button class="resume-form-mat-icon-button" mat-icon-button>
                  <mat-icon class="resume-form-mat-icon">delete</mat-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button (click)="add()" mat-raised-button color="primary">Add</button>
    </div>
  `,
  styles: [``]
})

export class EducationComponent {
  @Input() resumeId: string;
  @Input() educations: Education[];

  constructor(private matDialog: MatDialog) {
  }

  add() {
    this.matDialog.open(EducationFormComponent, {
      width: '90%', height: '90%', data: {resumeId: this.resumeId}
    });
  }
}
