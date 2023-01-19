import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtlasGuard } from './Guards/atlas.guard';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'users',
    component:UsersComponent,
    canActivate:[AtlasGuard],
  },
  {
    path:'login',
    component:LoginComponent,
  },
 {
  path: '**', 
  redirectTo: '/home', 
  pathMatch: 'full'
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
