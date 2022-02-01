import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-enviados',
  templateUrl: './enviados.component.html',
  styleUrls: ['./enviados.component.css']
})
export class EnviadosComponent implements OnInit {
  storedItems:any = localStorage.getItem('username');
  enviados = [] as any

  constructor(
    private TaskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getSent()
  }



  getSent(){
    this.TaskService.getEnviados(this.storedItems).subscribe(mensajese =>{
      this.enviados = mensajese
    })
  }
}