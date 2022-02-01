import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  active = 'top';
  public isCollapsed = false;
  storedItems:any = localStorage.getItem('username');
  mensajes1 = [] as any
  
  constructor(
    private TaskService: TaskService
    
  ) { }

  ngOnInit(): void {
    this.toggleDisplayDiv()
    this.getInbox()

  }
  isShowDiv = true;  
     
  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  }  
  getInbox(){
    this.TaskService.getMessges(this.storedItems).subscribe(mensajes =>{
      this.mensajes1 = mensajes
      
    })
  }
  eliminarMensaje(id:string){
    this.TaskService.deleteMessage(id).subscribe(mensajes =>{
      this.getInbox()
      
    })
  }
  reLoad(){
    window.location.reload();
  }
}

