import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import {ViewUserComponent} from './view-user/view-user.component';
import{DeleteUserComponent} from './delete-user/delete-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent

  },
  {
    path : 'add-user',
    component : AddUserComponent
  },
  {
    path :'view',
    component:ViewUserComponent
  },
  {
    path:'delete',
    component:DeleteUserComponent
  },
  {
    path:'update',
    component:UpdateUserComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
