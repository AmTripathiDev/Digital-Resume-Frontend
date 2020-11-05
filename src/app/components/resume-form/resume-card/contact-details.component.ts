import {Component, Input} from '@angular/core';
import {Contact, Resume} from '../../../models/resume';
import {MatDialog} from '@angular/material/dialog';
import {ContactDetailFormComponent} from '../resume-dialogues/contact-detail-form.component';

@Component({
  selector: 'app-contact-details',
  template: `
    <div style="position: relative" fxLayout="column" fxLayoutAlign="center center">
      <div class="cards-outer-div" fxLayout="column" fxLayoutAlign="center center">
        <ng-container *ngIf="!this.contactDetails">
          <h3 class="empty-heading">No Contact Details Added Yet</h3>
        </ng-container>
        <div fxLayoutAlign="center center">
          <div class="hover-container">
            <div class="hover">
              <button (click)="openContactForm()" style=" margin-top: 2.5rem" mat-icon-button>
                <mat-icon>add</mat-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`

    .empty-heading {
      padding: 25px;
      margin-top: 2%;
      text-align: center;
      font-weight: bold
    }

    mat-icon {
      font-size: 43px;
    }
  `]
})

export class ContactDetailsComponent {
  @Input() contactDetails: Contact;
  @Input() resumeId: string;

  constructor(private matDialog: MatDialog) {
  }

  openContactForm() {
    this.matDialog.open(ContactDetailFormComponent, {
      width: '90%', height: '90%', data: {contactDetails: this.contactDetails, resumeId: this.resumeId}
    });
  }
}
