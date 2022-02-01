import { Component, OnInit,SimpleChanges } from '@angular/core';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  storedItems:any = ''
  showUnlogin = false
  storedI2 : any = ''

  
  constructor(
    private TaskService: TaskService
  ) { }

  ngOnInit(): void {
    this.storedItems = this.TaskService.getLC();
    if (this.storedItems !== null) {
      this.showUnlogin = true
      }else {
        this.showUnlogin = false
      }
   
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.storedItems !== null) {
      this.showUnlogin = true
      }else {
        this.showUnlogin = false
      }
  }

  unlogin(){
    localStorage.clear();
  }
}
