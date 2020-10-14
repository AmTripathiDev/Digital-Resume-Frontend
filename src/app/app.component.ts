import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {filter, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

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
        <a style="margin-top: 2rem;" href="#">Forgot Password?</a>
        <div style="margin-top: 2rem" fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="end">
          <button type="submit" color="primary" mat-raised-button>Login</button>
          <button (click)="signup()" type="button" color="accent" mat-raised-button>Signup</button>
        </div>
      </mat-card>
    </form>
  `,
  styles: [`
    .overlay {
      width: 100%;
      height: 100%;
    }

    button {
      color: white !important;
    }

    mat-card {
      height: 20rem;
      width: 25rem;
    }
  `]
})
export class AppComponent {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(8)])
    });
    this.buySugarFromShop();
  }

  buySugarInBulk() {
    return new Observable(emitter => {
      emitter.next('Sugar is purchased');
    });
  }

  buySugarInQuantity(quantity) {
    return new Observable(emitter => {
      emitter.next('Sugar with Quantity: ' + quantity + ' is here for you');
    });
  }

  buySugarFromShop() {
    // observable A is dependant on Observable B
    // we need to observe value of B only
    // this.buySugarInBulk().subscribe(data => {
    //   this.buySugarInQuantity('1Kg').subscribe(res => {
    //     console.log(res);
    //   });
    // });
    // const newObserver = this.buySugarInBulk().pipe(switchMap(() => {
    //   return this.buySugarInQuantity('1kg');
    // }));
    // newObserver.subscribe((data) => {
    //   console.log(data);
    // });
  }

  login() {

  }

  signup() {
  }
}

