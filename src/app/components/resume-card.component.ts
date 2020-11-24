import {Component, Input} from '@angular/core';
import {Resume} from '../models/resume';

@Component({
  selector: 'app-resume-card',
  template: `
    <mat-card on-mouseover="hover = true"
              on-mouseleave="hover = false" fxLayout="column" fxLayoutAlign="center center">
      <img mat-card-image src="../../../assets/resume.png">
      <span style="color: #538ec3">{{resume.name}}</span>
      <div class="resume-hover" *ngIf="hover">
        <div style="margin-top: 5rem;" fxLayoutAlign="start center" fxLayout="row wrap" fxLayoutGap="40px">
          <button mat-icon-button>
            <mat-icon class="icon" matTooltip="share">share</mat-icon>
          </button>
          <button mat-icon-button>
            <mat-icon class="icon" matTooltip="Preview">visibility</mat-icon>
          </button>
          <button mat-icon-button>
            <mat-icon class="icon" matTooltip="Delete">delete</mat-icon>
          </button>
          <button mat-icon-button>
            <mat-icon class="icon" matTooltip="Edit">create</mat-icon>
          </button>
          <button mat-icon-button>
            <mat-icon class="icon" matTooltip="Download">download</mat-icon>
          </button>
        </div>
      </div>
    </mat-card>
  `,
  styles: [`
    mat-card {
      width: 250px;
      text-transform: uppercase;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
      height: 271px;
      transition: all 0.5s;
      margin-bottom: 1rem;
    }

    mat-icon {
      font-size: 3rem;
    }

    button {
      margin-bottom: 1rem;
    }

    .resume-hover {
      position: absolute;
      background-color: rgba(36, 36, 36, 0.81);
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 10;
      height: calc(100% - 45px);
      width: 100%;
      opacity: 0;
    }

    .resume-hover:hover {
      opacity: 0.8;
      transition: opacity .8s;
    }

  `]
})

export class ResumeCardComponent {
  hover = false;
  @Input() resume: Resume;

  constructor() {
  }
}
