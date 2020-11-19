import {Injectable} from '@angular/core';
import {ApiService} from '../services/api-service';
import {Store} from '@ngrx/store';
import {getResume, resumeError, resumeLoaded, resumeLoading} from '../reducers';
import {combineLatest, Observable} from 'rxjs';
import {
  AddContactDetailAction,
  AddResumeAction, AddSkillAction, DeleteSkillAction,
  ResumeErrorAction,
  ResumeListRequestAction,
  ResumeListSuccessAction, UpdateContactDetailAction,
  UpdateResumeAction, UpdateSkillAction
} from '../actions/resume-actions';
import {map, take} from 'rxjs/operators';
import {Resume} from '../models/resume';

@Injectable()
export class ResumeRepository {
  constructor(private apiService: ApiService, private store: Store) {
  }

  fetchAllResumes(force = false): [Observable<boolean>, Observable<boolean>, Observable<Resume[]>] {
    const loading$ = this.store.select(resumeLoading);
    const loaded$ = this.store.select(resumeLoaded);
    const resume$ = this.store.select(getResume);
    const error$ = this.store.select(resumeError);
    combineLatest([loading$, loaded$]).pipe(take(1)).subscribe(data => {
      if (!data[0] && !data[1] || force) {
        this.store.dispatch(new ResumeListRequestAction());
        this.apiService.fetchAllResumes().subscribe(resume => {
          this.store.dispatch(new ResumeListSuccessAction(resume));
        }, error => {
          this.store.dispatch(new ResumeErrorAction());
        });
      }
    });
    return [loading$, error$, resume$];
  }

  saveResume(data): Observable<any> {
    return this.apiService.saveResume(data).pipe(map((resume) => {
      this.store.dispatch(new AddResumeAction(resume));
      return resume;
    }));
  }

  saveOrUpdateImage(image: File, resumeId: string) {
    return this.apiService.saveOrUpdateImage(image, resumeId).pipe(map((resume) => {
      this.store.dispatch(new UpdateResumeAction(resume));
      return resume;
    }));
  }

  deleteImage(resumeId: string) {
    return this.apiService.deleteImage(resumeId).pipe(map((resume) => {
      this.store.dispatch(new UpdateResumeAction(resume));
      return resume;
    }));
  }

  addVideo(resumeId: string, data: { video_url: string }) {
    return this.apiService.addVideo(resumeId, data).pipe(map((resume) => {
      this.store.dispatch(new UpdateResumeAction(resume));
      return resume;
    }));
  }

  updateContactDetails(data, contactDetailId: string, resumeId: string) {
    return this.apiService.updateContactDetails(data, contactDetailId).pipe(map((res) => {
      this.store.dispatch(new UpdateContactDetailAction({resume_id: resumeId, contact: res}));
      return res;
    }));
  }

  addContactDetails(data, resumeId: string) {
    return this.apiService.addContactDetails(data, resumeId).pipe(map((res) => {
      this.store.dispatch(new AddContactDetailAction({resume_id: resumeId, contact: res}));
      return res;
    }));
  }

  addSkill(data, resumeId: string) {
    return this.apiService.addSkill(data, resumeId).pipe(map(res => {
      this.store.dispatch(new AddSkillAction({skill: res, resume_id: resumeId}));
    }));
  }

  updateSkill(data: any, skillId: string, resumeId: string) {
    return this.apiService.updateSkill(data, skillId).pipe(map(res => {
      this.store.dispatch(new UpdateSkillAction({skill: res, resume_id: resumeId}));
    }));
  }

  deleteSkill(skillId: string, resumeId: string) {
    return this.apiService.deleteSkill(skillId).pipe(map(res => {
      this.store.dispatch(new DeleteSkillAction({skill: res, resume_id: resumeId}));
    }));
  }
}
