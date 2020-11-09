import {Component, Input} from '@angular/core';
import {Strength} from '../../../models/strength';
import {MatDialog} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {AlertService} from '../../../services/alert-service';
import {StrengthFormComponent} from '../resume-dialogues/strength-form.component';

@Component({
  selector: 'app-strength-card',
  template: `
    <div style="position: relative;margin-bottom: 1rem;" fxLayoutAlign="center center" fxLayout="column">
      <div class="cards-outer-div" fxLayout="column" fxLayoutAlign="center center">
        <ng-container>
          <h3 class="resume-form-info-card-heading">{{strength.name}}</h3>
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

export class StrengthCardComponent {
  @Input() strength: Strength;

  constructor(private matDialog: MatDialog, private apiService: ApiService, private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(StrengthFormComponent, {
      width: '90%', height: '90%', data: {strength: this.strength}
    });
  }

  delete() {
    this.apiService.deleteStrength(this.strength._id)
      .subscribe(data => {
        this.alertService.success('strength deleted Successfully');
      });
  }
}
