import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './admin/login/login-service/guard/auth.guard';
import { LoginComponent } from './admin/login/login.component';
import { FormComponent } from './user/form/form.component';


const routes: Routes = [
  { path: '', component: FormComponent},
  { path: 'user', loadChildren: () => import('./user/member.module').then(mod => mod.MemberModule)},
  // tslint:disable-next-line:max-line-length
  { path: 'administration-panel', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule), canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/user', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]

})
export class AppRoutingModule { }
