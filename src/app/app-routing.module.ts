import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './container/login.component';
import {SignupComponent} from './container/signup.component';
import {ForgotPasswordComponent} from './container/forgot-password.component';
import {VerificationComponent} from './container/verification.component';
import {AuthGuard} from './guards/auth-guard';
import {AnonGuard} from './guards/anon-guard';
import {OnBoardingComponent} from './container/on-boarding/on-boarding.component';
import {DashboardComponent} from './container/layout/dashboard.component';
import {VerificationInComplete} from './guards/verification-in-complete';
import {VerificationCompleted} from './guards/verification-completed';
import {OnBoardingInComplete} from './guards/on-boarding-in-complete';
import {OnBoardingComplete} from './guards/on-boarding-complete';
import {OnBoardingIntroComponent} from './container/on-boarding/on-boarding-intro.component';
import {ResumeComponent} from './container/dashboard/resume.component';
import {SettingComponent} from './container/dashboard/setting.component';
import {LogoutComponent} from './components/logout.component';
import {NotFoundComponent} from './container/not-found.component';
import {TemplatesComponent} from './container/templates.component';
import {SingleTemplateComponent} from './container/single-template.component';


const routes: Routes = [
  {
    path: '', canActivate: [AnonGuard],
    children: [{path: 'signup', component: SignupComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: '', component: LoginComponent}]
  },
  {
    path: '', canActivate: [AuthGuard, VerificationInComplete], children: [{
      path: 'verify', component: VerificationComponent,
    }]
  },
  {
    path: '', children: [{path: 'on-boarding', component: OnBoardingIntroComponent},
      {path: 'on-boarding/add', component: OnBoardingComponent}],
    canActivate: [AuthGuard, VerificationCompleted, OnBoardingInComplete]
  },
  {
    path: '',
    children: [{
      path: 'dashboard', component: DashboardComponent,
      children: [{path: 'resume', component: ResumeComponent},
        {path: 'settings', component: SettingComponent},
        {path: 'resume/template/:id', component: TemplatesComponent},
        {path: 'resume/template/:id/:templateId', component: SingleTemplateComponent}]
    }],
    canActivate: [AuthGuard, VerificationCompleted, OnBoardingComplete]
  },
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
