import {Component, Input} from '@angular/core';
import {Education} from '../../../models/education';

@Component({
  selector: 'app-education-card',
  template: `
    <div style="position: relative;margin-bottom: 1rem;" fxLayoutAlign="center center" fxLayout="column">
      <div class="cards-outer-div" fxLayout="column" fxLayoutAlign="center center">
        <ng-container>
          <h3 class="resume-form-info-card-heading">{{education.field}}</h3>
          <h3 class="resume-form-info-card-heading">{{education.degree_type}}</h3>
          <p class="resume-form-info-card-heading">{{education.city}}</p>
          <p class="resume-form-info-card-heading">{{education.school_name}}</p>
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
  `,
  styles: [``]
})

export class EducationCardComponent {
  @Input() education: Education;

  constructor() {
  }
}
