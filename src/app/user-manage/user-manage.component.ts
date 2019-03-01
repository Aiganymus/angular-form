import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../services/user.type';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {
  user: User;
  userId: string;
  userForm: FormGroup;
  formSubmitted = false;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];

    if(this.userId) {
      this.userService.getUserById(this.userId)
        .subscribe(res => {
          this.user = res;
          this.userForm = new FormGroup({
            'username': new FormControl(this.user.username),
            'password': new FormControl(this.user.username, Validators.required),
            'email': new FormControl(this.user.email, Validators.required),
            'realm': new FormControl(this.user.realm),
          });
        })
    } else {
        this.userForm = new FormGroup({
          'username': new FormControl(''),
          'password': new FormControl('', Validators.required),
          'email': new FormControl('', Validators.required),
          'realm': new FormControl(''),
        });
    }
  }

  onSubmit() {
    this.formSubmitted = true;
    console.log(this.userForm.value);
    if (this.userForm.invalid) {
      console.error('Проверьте введенные данные', 'Ошибка');
      return;
    }
    const values = this.userForm.value;
    const toSave = {
      username: values['username'],
      email: values['email'],
      realm: values['realm'],
      password: values['password'],
    };
    if(this.userId) this.update(toSave);
    else this.create(toSave);
  }

  update(toSave: User) {
    this.userService.updateUser(this.userId, toSave)
      .subscribe(
        res => {
          if (res.id)
            this.router.navigateByUrl('/user/' + res.id);
        },
        err => {
         console.error('Произошла ошибка ' + err, 'Ошибка');
      });
  }

  create(toSave: User) {
    this.userService.createUser(toSave)
      .subscribe(
        res => {
          if (res.id)
            this.router.navigateByUrl('/user/' + res.id);
        },
        err => {
          console.error('Произошла ошибка ' + err, 'Ошибка');
      });
  }

}
