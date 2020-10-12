import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="overlay" fxLayoutAlign="center center" fxLayout="column" fxLayoutGap="40px">
      <img width="20%" src="../assets/digiresume-green.png">
      <mat-card fxLayout="column">
        <h2>Login</h2>
        <mat-form-field>
          <input type="email" matInput placeholder="Email"/>
        </mat-form-field>
        <mat-form-field>
          <input type="password" matInput placeholder="Password"/>
        </mat-form-field>
        <a href="#">Forgot Password?</a>
        <div style="margin-top: 2rem" fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="end">
          <button color="primary" mat-raised-button>Login</button>
          <button color="accent" mat-raised-button>Signup</button>
        </div>
      </mat-card>
    </div>
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
}

