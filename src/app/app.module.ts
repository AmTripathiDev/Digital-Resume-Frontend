import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VideoComponent} from './components/video.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './services/http-service';
import {ApiService} from './services/api-service';
import {AlertService} from './services/alert-service';
import {LoginComponent} from './container/login.component';
import {SignupComponent} from './container/signup.component';
import {ForgotPasswordComponent} from './container/forgot-password.component';
import {VerificationComponent} from './container/verification.component';
import {AuthGuard} from './guards/auth-guard';
import {AnonGuard} from './guards/anon-guard';
import {OnBoardingComponent} from './container/on-boarding/on-boarding.component';
import {DashboardComponent} from './container/layout/dashboard.component';
import {VerificationCompleted} from './guards/verification-completed';
import {VerificationInComplete} from './guards/verification-in-complete';
import {OnBoardingComplete} from './guards/on-boarding-complete';
import {OnBoardingInComplete} from './guards/on-boarding-in-complete';
import {OnBoardingIntroComponent} from './container/on-boarding/on-boarding-intro.component';
import {ResumeNameComponent} from './container/on-boarding/resume-name.component';
import {UploadComponent} from './container/tabs/upload.componet';
import {UploadImageComponent} from './container/tabs/upload-image.component';
import {UploadFromDiskComponent} from './container/tabs/upload-from-disk.component';
import {ImportYoutubeComponent} from './container/tabs/import-youtube.component';
import {ResumeFormComponent} from './container/resume-form.component';
import {ContactDetailsComponent} from './components/resume-form/contact-details.component';
import {ContactDetailFormComponent} from './components/resume-form/resume-dialogues/contact-detail-form.component';
import {EducationComponent} from './components/resume-form/education.component';
import {EducationFormComponent} from './components/resume-form/resume-dialogues/education-form.component';
import {MatOptionModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    VerificationComponent,
    OnBoardingComponent,
    DashboardComponent,
    OnBoardingIntroComponent,
    ResumeNameComponent,
    UploadComponent,
    UploadImageComponent,
    UploadFromDiskComponent,
    ImportYoutubeComponent,
    ResumeFormComponent,
    ContactDetailsComponent,
    ContactDetailFormComponent,
    EducationComponent,
    EducationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [HttpService, ApiService,
    AlertService, AuthGuard, AnonGuard, VerificationCompleted,
    VerificationInComplete, OnBoardingComplete, OnBoardingInComplete],
  bootstrap: [AppComponent]
})
export class AppModule {
}
