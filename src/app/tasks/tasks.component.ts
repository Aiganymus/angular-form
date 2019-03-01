import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../services/task.type';

@Component({
  selector: 'app-posts',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.taskService.getTasksByUserId(params.get('userId'))
        .subscribe(
          res => {
            this.tasks = res;
          },
          err => {
            console.error(err);
          }
        )
    })
  }
}
