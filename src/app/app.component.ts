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
    <div style="background: #b04bd8;width: 30vw; margin: 15px">
      <mat-form-field>
        <mat-label>Favorite food</mat-label>
        <input matInput placeholder="Ex. Pizza">
      </mat-form-field>
    </div>
    <div style="background: #b04bd8;width: 30vw; margin: 15px">
      <mat-form-field class="example-full-width">
        <mat-label>Leave a comment</mat-label>
        <textarea matInput placeholder="Ex. It makes me feel..."></textarea>
      </mat-form-field>
    </div>
  `,
  styles: [`
  `]
})
export class AppComponent {
}

