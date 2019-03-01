import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../services/user.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.updateUsers();
  }

  deleteUser(id: string) {
    this.userService.deleteUserById(id)
      .subscribe(
      res => {
        this.updateUsers();
      },
      err => {
        console.error(err);
      })
  }

  updateUsers() {
    this.userService.getUsers()
      .subscribe(
      res => {
        this.users = res;
      },
      error => {
        console.error(error);
      });
  }
}
