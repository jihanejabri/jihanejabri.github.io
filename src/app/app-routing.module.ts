import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

import { HomePageComponent } from './component/home-page/home-page.component';
import { AuthGuardService } from './shared/guard/auth-guard.service';
import { PicturesComponent } from './component/pictures/pictures.component';
import { ShowDetailsComponent } from './component/pictures/show-details/show-details.component';
import { AddPictureComponent } from './component/pictures/add-picture/add-picture.component';

const routes: Routes = [
{
    path: 'signIn',
    component: SignInComponent
},
{
  path: 'signUp',
  component: SignUpComponent
},
{
  path: 'pictures',
  component: PicturesComponent,
  canActivate: [AuthGuardService]
},
{
  path: 'picture/:id',
  component: ShowDetailsComponent,
  canActivate: [AuthGuardService]
},
{
  path: 'picture',
  component: AddPictureComponent,
  canActivate: [AuthGuardService]
},
{
  path: 'home',
  component: HomePageComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
},
{
  path: '**',
  redirectTo: 'home',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
