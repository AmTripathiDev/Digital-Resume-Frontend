import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-verification',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center" class="overlay">
      <mat-card fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="50px" fxFlex="100%">
        <mat-icon inline>unsubscribe</mat-icon>
        <div fxLayout="column" fxLayoutAlign="center center">
          <h1>You haven't Verified your Email yet</h1>
          <p>Please verify your email which is sent to <strong>{{email}} </strong> before continuing</p>
        </div>
        <button mat-raised-button color="primary">Send Email Again</button>
      </mat-card>
    </div>
  `,
  styles: [`
    .overlay {
      width: 100%;
      height: 100%;
      background: linear-gradient(to right bottom, rgb(125, 226, 97), rgb(66, 123, 181));;
    }

    mat-icon {
      font-size: 6rem !important;
      color: #16cb99;
    }

    h1 {
      font-weight: bold;
      font-size: 1.8rem;
    }

    button {
      color: white !important;
    }

    p {
      text-align: center;
      width: 70%;
    }

    p, h1 {
      color: #3FC54B;
    }

    mat-card {
      max-width: 40% !important;
      max-height: 50% !important;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px 10px inset !important;
    }

  `]
})

export class VerificationComponent {
  email = '';

  constructor(private activatedRoute: ActivatedRoute) {
    this.fetchEmail();
  }

  fetchEmail() {
    const email$ = this.activatedRoute.queryParams.pipe(map(data => data.email));
    email$.subscribe(data => {
      this.email = data;
    });
  }
}
