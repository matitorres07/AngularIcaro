import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { TaskService } from '../services/task.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  destinatario :any
  idDestinatario:any
  obejetoFinal:object
  usuarios : any
  form:  FormGroup =  new FormGroup({
    receiverId: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required]),
  })
  constructor(
    private TaskService: TaskService,
    public modal:NgbModal
  ) { }

  ngOnInit(): void {
    this.obtenerDestinatarios()
  }

  openSM(contenido){
    this.modal.open(contenido,{size:'sm'});
  }
  openLG(contenido){
    this.modal.open(contenido,{size:'lg'});
  }
  openXL(contenido){
    this.modal.open(contenido,{size:'xl'});
  }
  openCentrado(contenido){
    this.modal.open(contenido,{centered:true});
  }
  openScroll(contenido){
    this.modal.open(contenido,{scrollable:true});
  }
  openBackground(contenido){
    this.modal.open(contenido,{backdropClass:'azul'});
  }
  openWindow(contenido){
    this.modal.open(contenido,{windowClass:'oscuro'});
  }
  
  
  obtenerDestinatarios(){
    this.TaskService.getAllUsers().subscribe((response: any )=> {
      this.usuarios = response
      console.log(this.usuarios)
    })
  }
  
  asd(){
    console.log(this.form.value)
  }
  getReciverId(){
    this.destinatario = 
    this.usuarios.find(x => x.username === this.form.controls['receiverId'].value );
    this.idDestinatario = this.destinatario.id

  }

  sendMessage(){
    this.getReciverId()
    this.obejetoFinal = {
      receiverId : this.idDestinatario,
      text : this.form.controls['text'].value
    }
    console.log(this.form.controls['receiverId'].value)
    console.log(this.obejetoFinal)
    
    this.TaskService.addMessage(this.form.controls['receiverId'].value,this.obejetoFinal).subscribe((response:any) =>{
      console.log("Mensaje enviado")
    })
    
  }

}
