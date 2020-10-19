import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  template: `
    <form fxLayoutAlign="center center"
          fxLayout="column"
          fxLayoutGap="40px" class="overlay" [formGroup]="forgotPasswordForm" (ngSubmit)="forgotPasswordForm && sendEmail()">
      <img width="20%" src="../assets/digiresume-green.png">
      <mat-card fxLayout="column">
        <h2>Forgot Password</h2>
        <mat-form-field>
          <input formControlName="email" type="email" matInput placeholder="Email"/>
          <mat-error>Valid Email is Required</mat-error>
        </mat-form-field>
        <div style="margin-top: 2rem" fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="end">
          <button type="submit" color="primary" mat-raised-button>Send Email</button>
        </div>
        <mat-spinner *ngIf="this.loading" color="accent" diameter="40"></mat-spinner>
      </mat-card>
    </form>
  `,
  styles: [`

    .overlay {
      width: 100%;
      height: 100%;
    }

    mat-spinner {
      align-self: center;
      margin-top: 2rem;
    }

    button {
      color: white !important;
    }

    mat-card {
      height: 15rem;
      width: 25rem;
    }
  `]
})

export class ForgotPasswordComponent {
  loading = false;
  forgotPasswordForm: FormGroup;

  constructor() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
    });
  }

  sendEmail() {
    console.log('send email');
  }
}

