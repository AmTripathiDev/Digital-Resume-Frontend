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
    <mat-card style="width: 30vw;margin-left: 2%;margin-top: 2%;background: #9c27b0">
      <mat-form-field>
        <mat-label>Favorite food</mat-label>
        <input matInput placeholder="Ex. Pizza">
      </mat-form-field>
    </mat-card>
  `,
  styles: [`
  `]
})
export class AppComponent {
}

