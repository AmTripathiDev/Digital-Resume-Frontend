import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './container/login.component';
import {SignupComponent} from './container/signup.component';
import {ForgotPasswordComponent} from './container/forgot-password.component';
import {VerificationComponent} from './container/verification.component';
import {AuthGuard} from './guards/auth-guard';
import {AnonGuard} from './guards/anon-guard';
import {OnBoardingComponent} from './container/on-boarding.component';
import {DashboardComponent} from './container/layout/dashboard.component';


const routes: Routes = [{
  path: '', canActivate: [AnonGuard],
  children: [{path: 'signup', component: SignupComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: '', component: LoginComponent}]
}, {
  path: '', canActivate: [AuthGuard], children: [{path: 'verify', component: VerificationComponent},
    {path: 'on-boarding', component: OnBoardingComponent},
    {path: 'dashboard', component: DashboardComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
