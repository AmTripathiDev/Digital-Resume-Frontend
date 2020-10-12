import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Material</h1>
    <mat-toolbar style="background:#a7a7a7">
      <button mat-button color="primary">Home</button>
      <button mat-button color="primary">Contact Us</button>
      <button mat-button color="accent">Login</button>
    </mat-toolbar>
    <mat-card fxLayoutAlign="center" fxLayout="column" style="width: 30vw;margin-left: 2%;margin-top: 2%;background: #9c27b0">
      <div fxLayout="row" fxLayoutGap="20px">
        <mat-form-field>
          <mat-label>First name</mat-label>
          <input matInput placeholder="FirstName">
        </mat-form-field>
        <mat-form-field>
          <mat-label>Last Name</mat-label>
          <input matInput placeholder="Last Name">
        </mat-form-field>
      </div>
      <mat-form-field>
        <mat-label>Email</mat-label>
        <input matInput placeholder="Email">
      </mat-form-field>
    </mat-card>
  `,
  styles: [`
  `]
})
export class AppComponent {
}

