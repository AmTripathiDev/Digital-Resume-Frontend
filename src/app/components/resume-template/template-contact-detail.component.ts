import {AfterContentInit, Component, Input} from '@angular/core';
import {Resume} from '../../models/resume';

@Component({
  selector: 'app-template-contact-detail',
  template: `
    <div fxLayout="column"
         fxLayoutAlign="center center">
      <button [ngStyle]="{'background-image':'url('+this.imageUrl+')'}"
              mat-fab class="profile-pic">

      </button>
      <h1>{{this.resume.contact_details.first_name}}
        {{this.resume.contact_details.last_name}}</h1>
      <app-template-buttons [resumeId]="resume._id"></app-template-buttons>
      <div fxLayout="row" fxLayoutGap="30px" class="container border-container">
        <mat-icon>account_circle</mat-icon>
        <p>{{this.resume.contact_details.summary}}</p>
      </div>
    </div>
  `,
  styles: [`
    h1 {
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 37pt;
      text-align: center;
    }

    mat-icon {
      font-size: 30px;
    }

    .container {
      color: #fff;
      margin-top: 10%
    }

    .border-container {
      padding-bottom: 10%;
      border-bottom: 1px solid #fff;
      margin-bottom: 15%;
    }

    p {
      font-weight: 300;
      font-size: 1.2rem;
      line-height: 17pt;
      word-wrap: break-word;
      overflow: hidden;
    }

    .profile-pic {
      background-color: transparent;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      margin-bottom: 10%;
      border: 3px solid white;
      width: 75%;
      height: 200px;
    }
  `]
})

export class TemplateContactDetailComponent implements AfterContentInit {
  @Input() resume: Resume;
  imageUrl = '';

  constructor() {
  }

  ngAfterContentInit() {
    this.imageUrl = this.resume.image_url ? this.resume.image_url : '../../assets/testimonial.png';
  }
}
