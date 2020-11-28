import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Resume} from '../models/resume';
import {ResumeRepository} from '../repository/resume-repository';
import {filter, map, switchMap, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-single-resume',
  template: `
    <div class="main-div" fxLayout="row" *ngIf="this.resume">
      <mat-card class="sidebar" *ngIf="this.resume.contact_details || this.resume.skills.length ||
this.resume.weakness.length || this.resume.languages.length || this.resume.strengths.length">
        <div
          fxLayout="column" fxLayoutGap="20px">
          <button matTooltip="Views: {{this.resume.views}}" style="background: #f1c232;" mat-mini-fab
                  *ngIf="this.resume && this.isPreview && this.resume.contact_details ">
            <mat-icon style="color: black">remove_red_eye</mat-icon>
          </button>
          <div fxLayout="column"
               fxLayoutAlign="center center">
            <button [ngStyle]="{'background-image':'url('+this.imageUrl+')'}"
                    mat-fab class="profile-pic">

            </button>
            <h1>{{this.resume.contact_details.first_name}}
              {{this.resume.contact_details.last_name}}</h1>
            <div fxLayout="row" fxLayoutAlign="center center" fxLayoutGap="30px">
              <button mat-mini-fab matTooltip="edit resume">
                <mat-icon>assignment</mat-icon>
              </button>
              <button mat-mini-fab matTooltip="edit profile image or vide">
                <mat-icon>videocam</mat-icon>
              </button>
              <button mat-mini-fab matTooltip="share resume">
                <mat-icon>share</mat-icon>
              </button>
            </div>
          </div>
        </div>
      </mat-card>
    </div>
  `,
  styles: [`

    .main-div {
      width: 100vw;
      height: 100vh;
      background-image: url("../../assets/back.jpg");
    }

    h1 {
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 37pt;
      text-align: center;
    }

    .sidebar {
      background: #538EC3;
      margin-left: 12rem;
      width: 300px;
      box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.3) !important;
      margin-top: 3rem;
      margin-bottom: 3rem;
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

export class SingleResumeComponent implements OnInit, OnDestroy {
  resume: Resume;
  loading = false;
  isAlive = true;
  isPreview = false;
  imageUrl = '';

  constructor(private route: ActivatedRoute,
              private router: Router, private resumeRepo: ResumeRepository) {
  }

  ngOnInit() {
    this.isPreview = this.router.url.includes('preview');
    const resume$ = this.route.params.pipe(
      takeWhile(() => this.isAlive),
      map(data => data.id), switchMap(id => {
        return this.resumeRepo.getResumeById(id);
      }), filter(res => !!res));
    resume$.subscribe(data => {
      this.resume = data;
      this.imageUrl = this.resume.image_url ? this.resume.image_url : '../../assets/testimonial.png';
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
