import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Material Button</h1>
    <mat-toolbar style="background:#a7a7a7">
      <button mat-button color="primary">Home</button>
      <button mat-button color="primary">Contact Us</button>
      <button mat-button color="accent">Login</button>
    </mat-toolbar>
  `,
  styles: [`
  `]
})
export class AppComponent {
}

