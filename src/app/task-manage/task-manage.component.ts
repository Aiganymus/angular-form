import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../services/task.type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-manage',
  templateUrl: './task-manage.component.html',
  styleUrls: ['./task-manage.component.scss']
})
export class TaskManageComponent implements OnInit {
  task: Task;
  id: string;

  constructor(private taskService: TaskService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if(this.id) {

    } else {

    }
  }

  onSubmit() {

  }

}
