import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { TaskService } from '../services/task.service';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {
  form:  FormGroup =  new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.maxLength(200)]),
    passwordconf: new FormControl('', [Validators.maxLength(200)]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
  });;
  formfinal : FormGroup;
  finalobj : object;
  showErrorMessagePass = false;
  showErrorMessageComplete = false;
  

  constructor(
    private TaskService: TaskService,
    public modal:NgbModal
  ) { 
  // this.buildForm();
  }

  ngOnInit(): void {
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

  addUsuario(user:any){
    this.TaskService.addUser(user).subscribe(user => console.log(user))
  }

  getfroms(){
    if (this.form.controls['password'].value !== this.form.controls['passwordconf'].value ) {
      this.showErrorMessagePass = true;
  } else if (
    this.form.controls['username'].value === null || this.form.controls['username'].value === '' ||
    this.form.controls['name'].value === null || this.form.controls['name'].value === '' ||
    this.form.controls['lastname'].value === null || this.form.controls['lastname'].value === '' ||
    this.form.controls['password'].value === null || this.form.controls['lastname'].value === '' ||
    this.form.controls['passwordconf'].value === null || this.form.controls['lastname'].value === '' ||
    this.form.controls['country'].value === null || this.form.controls['lastname'].value === '' ||
    this.form.controls['city'].value === null || this.form.controls['lastname'].value === '' 
    ){
      this.showErrorMessageComplete = true;
  }
  
  else  {
    this.formfinal = this.form 
    this.finalobj = {
      username : this.formfinal.controls['username'].value ,
      firstName : this.formfinal.controls['name'].value ,
      lastName : this.formfinal.controls['lastname'].value ,
      password:this.formfinal.controls['password'].value ,
      country:this.formfinal.controls['country'].value ,
      city:this.formfinal.controls['city'].value }
    console.log(this.finalobj)
    this.addUsuario(this.finalobj)
    }
  
  } 
}



