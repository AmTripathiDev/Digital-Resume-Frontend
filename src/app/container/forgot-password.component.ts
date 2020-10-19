import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  template: `
    <form fxLayoutAlign="center center"
          fxLayout="column"
          fxLayoutGap="40px" class="overlay" [formGroup]="forgotPasswordForm"
          (ngSubmit)="forgotPasswordForm && !this.isEmailSent ? sendEmail(): changePassword()">
      <img width="20%" src="../assets/digiresume-green.png">
      <mat-card fxLayout="column">
        <h2>Forgot Password</h2>
        <mat-form-field *ngIf="!this.isEmailSent">
          <input formControlName="email" type="email" matInput placeholder="Email"/>
          <mat-error>Valid Email is Required</mat-error>
        </mat-form-field>
        <div fxLayout="column" *ngIf="isEmailSent">
          <mat-form-field>
            <input formControlName="code" matInput placeholder="Enter Code"/>
            <mat-error>Valid Code is Required</mat-error>
          </mat-form-field>
          <mat-form-field>
            <input formControlName="new_password" matInput placeholder="New Password"/>
            <mat-error>Valid Password is Required</mat-error>
          </mat-form-field>
          <mat-form-field>
            <input formControlName="confirm_password" matInput placeholder="Confirm Password"/>
            <mat-error>Valid Password is Required</mat-error>
          </mat-form-field>
        </div>
        <div *ngIf="!this.isEmailSent" style="margin-top: 2rem" fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="end">
          <button type="submit" color="primary" mat-raised-button>Send Email</button>
        </div>
        <div *ngIf="this.isEmailSent" style="margin-top: 2rem" fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="end">
          <button type="submit" color="primary" mat-raised-button>Change Password</button>
          <button color="accent" mat-raised-button>Go to Login</button>
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
      height: auto;
      width: 25rem;
    }
  `]
})

export class ForgotPasswordComponent {
  loading = false;
  forgotPasswordForm: FormGroup;
  isEmailSent = false;

  constructor() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, !this.isEmailSent ? [Validators.required] : []),
      code: new FormControl(null, []),
      new_password: new FormControl(null, []),
      confirm_password: new FormControl(null, []),
    });
  }


  sendEmail() {
    this.isEmailSent = true;
    this.forgotPasswordForm.get('code').setValidators([Validators.required]);
    this.forgotPasswordForm.get('new_password').setValidators([Validators.required]);
    this.forgotPasswordForm.get('confirm_password').setValidators([Validators.required]);
  }

  changePassword() {
  }
}

