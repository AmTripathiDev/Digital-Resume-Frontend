import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter, map, switchMap, takeWhile} from 'rxjs/operators';
import {Resume} from '../models/resume';
import {ResumeRepository} from '../repository/resume-repository';

@Component({
  selector: 'app-single-template',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <mat-card>
        <div>

        </div>
      </mat-card>
    </div>
  `,
  styles: [`
    mat-card {
      width: 8in;
      margin-top: 1%;
      box-shadow: 1px 1px 8px 8px rgba(0, 0, 0, 0.2) !important;
      margin-bottom: 1%;
    }
  `]
})

export class SingleTemplateComponent implements OnInit, OnDestroy {
  resume: Resume;
  templateId;
  loading = false;
  isAlive = true;

  constructor(private route: ActivatedRoute, private resumeRepo: ResumeRepository) {
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  ngOnInit() {
    this.fetchResume();
    const templateId = this.route.params.pipe(takeWhile(() => this.isAlive), map((data) => data.templateId));
    templateId.subscribe(data => {
      this.templateId = data;
    });
  }

  fetchResume() {
    const resume$ = this.route.params.pipe(takeWhile(() => this.isAlive),
      map((data) => data.id), switchMap(id => {
        return this.resumeRepo.getResumeById(id);
      }), filter((res) => !!res));
    resume$.subscribe(data => {
      this.resume = data;
    });
  }
}
