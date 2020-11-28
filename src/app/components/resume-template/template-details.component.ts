import {AfterContentInit, Component, Input} from '@angular/core';
import {Resume} from '../../models/resume';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-template-details',
  template: `
    <div class="main-container" fxLayout="column"
         fxLayoutGap="30px">
      <iframe *ngIf="!!this.videoUrl" [src]="this.videoUrl"
              width="700px" height="400px"></iframe>
      <ng-container *ngTemplateOutlet="educationTemplate"></ng-container>
    </div>
    <ng-template #educationTemplate>
      <mat-card fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutAlign="start center"
               fxLayoutGap="30px">
            <mat-icon>school</mat-icon>
            <p>Education</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" fxLayoutGap="20px" class="card-container ">
            <app-template-education *ngFor="let education of this.resume.education"
                                    [education]="education"></app-template-education>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>
  `,
  styles: [`
    .main-container {
      width: 100%;
      margin-bottom: 1.5rem;
      margin-top: 1.5rem;
    }

    .card-container {
      padding-left: 6rem;
    }

    mat-icon {
      font-size: 2.5rem;
    }

    p, mat-icon {
      color: #a85f46;
    }

    p {
      text-transform: uppercase;
      font-size: 2rem;
      margin-top: 1.2rem;
    }
  `]
})

export class TemplateDetailsComponent implements AfterContentInit {
  @Input() resume: Resume;
  videoUrl: any = '';

  constructor(private domSanatizer: DomSanitizer) {
  }

  ngAfterContentInit() {
    if (this.resume.video_url) {
      const id = this.resume.video_url.split('v=')[1];
      const url = 'https://www.youtube.com/embed/' + id;
      this.videoUrl = this.domSanatizer
        .bypassSecurityTrustResourceUrl(url);
    }
  }
}
