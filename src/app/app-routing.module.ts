import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './component/create-note/create-note.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {ResetPasswordComponent} from './component/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';


const routes: Routes = [ 
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotEmail',component:ResetPasswordComponent},
  {path:'forgotEmail' ,component:ForgotPasswordComponent},
  {path:'forgotpassword',component:ResetPasswordComponent},
  {path:'dashboard', component:DashboardComponent,
  children:[

{path: 'notes', component:GetAllNotesComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
