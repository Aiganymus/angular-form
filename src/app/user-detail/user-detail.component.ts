import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../services/user.type';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userService.getUserById(params.get('id'))
        .subscribe(
        res => {
          this.user = res;
        },
        error => {
          console.error(error);
        });
    });
  }

  goHome() {
    this.router.navigateByUrl('/');
  }
}
