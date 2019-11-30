import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './_services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign_in',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate:[AuthGuardService],
    loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule)
  },
  {
    path: '**',
    redirectTo: 'sign_in',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
