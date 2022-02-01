import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appMensajes';

  constructor(
    private TaskService: TaskService
  ){

  }
  

  getTask() {
    this.TaskService.getTask('1')
    .subscribe(todo => {
      console.log(todo);
    });
  }
}
