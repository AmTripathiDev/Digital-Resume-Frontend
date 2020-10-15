import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from './services/api-service';
import {AlertService} from './services/alert-service';

@Component({
  selector: 'app-root',
  template: `
    <form class="overlay" fxLayoutAlign="center center"
          fxLayout="column"
          fxLayoutGap="40px" (ngSubmit)="this.loginForm.valid && login()" [formGroup]="this.loginForm">
      <img width="20%" src="../assets/digiresume-green.png">
      <mat-card fxLayout="column">
        <h2>Login</h2>
        <mat-form-field>
          <input formControlName="email" type="email" matInput placeholder="Email"/>
          <mat-error>Valid Email is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="password" type="password" matInput placeholder="Password"/>
          <mat-error> (8-12 Digit) Password is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="confirm_password" matInput placeholder="Confirm Password"/>
          <mat-error> Confirm Password is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="name" matInput placeholder="Your Name"/>
          <mat-error> Name is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="experience_level" matInput placeholder="Experience Level"/>
          <mat-error> Exp Level is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="job_category" matInput placeholder="Job Category"/>
          <mat-error> Job Category is Required</mat-error>
        </mat-form-field>
        <a style="margin-top: 2rem;" href="#">Forgot Password?</a>
        <div style="margin-top: 2rem" fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="end">
          <button type="submit" color="primary" mat-raised-button>Login</button>
          <button (click)="signup()" type="button" color="accent" mat-raised-button>Signup</button>
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
      height: 38rem;
      width: 35rem;
    }
  `]
})
export class AppComponent {
  loginForm: FormGroup;
  loading = false;

  constructor(private apiService: ApiService, private alterService: AlertService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(8)]),
      confirm_password: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      experience_level: new FormControl(null, [Validators.required]),
      job_category: new FormControl(null, [Validators.required]),
    });
  }


  login() {
  }

  signup() {
    this.loading = true;
    this.apiService.signup(this.loginForm.value).subscribe((data) => {
      console.log(data);
      this.loading = false;
      this.alterService.success('signup Successful');
    }, (error) => {
      console.log(error);
      this.loading = false;
    });
  }
}

