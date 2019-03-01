import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component'
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { TaskManageComponent } from './task-manage/task-manage.component';
import { CitiesModule } from './cities/cities.module';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UsersListComponent,
    UserDetailComponent,
    TasksComponent,
    UserManageComponent,
    TaskManageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CitiesModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
