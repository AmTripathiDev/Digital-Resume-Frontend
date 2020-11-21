import {Component} from '@angular/core';
import {AuthRepository} from '../../repository/auth-repository';

@Component({
  selector: 'app-header',
  template: `
    <div fxLayout="row" fxLayoutAlign="start center" class="header-container">
      <img style="width: 15%" src="../../../assets/digiresume-light-green.png">
      <span fxFlex="1 1 auto"></span>
      <div fxFlex="1 1 auto" fxLayout="row" fxLayoutGap="10px" fxLayoutAlign="start center">
        <button routerLinkActive="selected"
                routerLink="resume" class="nav-bar-button" mat-button>Resumes
        </button>
        <button routerLinkActive="selected" routerLink="settings" class="nav-bar-button" mat-button>Settings</button>
        <button class="nav-bar-button" mat-button>Logout</button>
        <span fxFlex="35%"></span>
        <div class="username" fxLayoutAlign="start center" fxLayout="row" fxLayoutGap="10px">
          <mat-icon>account_circle</mat-icon>
          <span>{{this.userName}}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .header-container {
      background: #4c86bd;
      height: 10%;
      width: 100%;
      padding-left: 2rem;
    }

    .username {
      color: #a8ee90;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
    }

    .nav-bar-button {
      color: #a8ee90 !important;
      background: transparent;
      font-size: 1rem;
      text-transform: uppercase;
    }

    .nav-bar-button:hover {
      border-bottom: 1px solid #ffdab4;
      color: #ffdab4 !important;
    }

    .selected {
      border: 1px solid #a8ee90;
    }
  `]
})

export class HeaderComponent {
  userName = '';

  constructor(private authRepo: AuthRepository) {
    this.authRepo.fetchMe().subscribe(user => {
      this.userName = user.name;
    });
  }
}
