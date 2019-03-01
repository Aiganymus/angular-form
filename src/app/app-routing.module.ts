import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { TaskManageComponent } from './task-manage/task-manage.component';

const routes: Routes = [
  // {path: 'form', component: FormComponent},
  {path: 'user', component: UsersListComponent},
  {path: 'user/create', component: UserManageComponent},
  {path: 'user/create/:id', component: UserManageComponent},
  {path: 'user/:id', component: UserDetailComponent},
  {path: 'task/create', component: TaskManageComponent},
  {path: 'task/:userId', component: TasksComponent},
  {path: '', pathMatch: 'full', redirectTo: 'user'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
