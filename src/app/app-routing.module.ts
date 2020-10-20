import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './container/login.component';
import {SignupComponent} from './container/signup.component';
import {ForgotPasswordComponent} from './container/forgot-password.component';
import {VerificationComponent} from './container/verification.component';
import {AuthGuard} from './guards/auth-guard';
import {AnonGuard} from './guards/anon-guard';

const routes: Routes = [{path: 'login', component: LoginComponent, canActivate: [AnonGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [AnonGuard]},
  {path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AnonGuard]},
  {path: 'verify', component: VerificationComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
