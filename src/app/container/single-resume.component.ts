import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Resume} from '../models/resume';
import {ResumeRepository} from '../repository/resume-repository';
import {filter, map, switchMap, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-single-resume',
  template: `
    <h1>Single resume component</h1>
  `,
  styles: [``]
})

export class SingleResumeComponent implements OnInit, OnDestroy {
  resume: Resume;
  loading = false;
  isAlive = true;
  isPreview = false;

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
      console.log(data);
      this.resume = data;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
