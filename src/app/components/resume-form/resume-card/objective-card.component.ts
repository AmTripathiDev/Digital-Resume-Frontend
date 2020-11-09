import {Component, Input} from '@angular/core';
import {Objective} from '../../../models/objective';
import {MatDialog} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {AlertService} from '../../../services/alert-service';
import {ObjectiveFormComponent} from '../resume-dialogues/objective-form.component';

@Component({
  selector: 'app-objective-card',
  template: `
    <div style="position: relative;margin-bottom: 1rem;" fxLayoutAlign="center center" fxLayout="column">
      <div class="cards-outer-div" fxLayout="column" fxLayoutAlign="center center">
        <ng-container>
          <h3 class="resume-form-info-card-heading">{{this.objective.objective}}</h3>
          <h3 class="resume-form-info-card-heading">{{this.objective.declaration}}</h3>
          <p class="resume-form-info-card-heading">{{this.objective.place}}</p>
          <p class="resume-form-info-card-heading">{{this.objective.date}}</p>
        </ng-container>
        <div fxLayoutAlign="center center">
          <div class="hover-container">
            <div class="hover">
              <button (click)="edit()" class="resume-form-mat-icon-button" mat-icon-button>
                <mat-icon class="resume-form-mat-icon">create</mat-icon>
              </button>
              <button (click)="delete()" class="resume-form-mat-icon-button" mat-icon-button>
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

export class ObjectiveCardComponent {
  @Input() objective: Objective;

  constructor(private matDialog: MatDialog, private apiService: ApiService, private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(ObjectiveFormComponent, {
      width: '90%', height: '90%', data: {objective: this.objective}
    });
  }

  delete() {
    this.apiService.deleteObjective(this.objective._id)
      .subscribe(data => {
        this.alertService.success('Objective deleted Successfully');
      });
  }
}
