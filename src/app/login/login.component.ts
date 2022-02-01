import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskService } from '../services/task.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailControl = new FormControl('',[],[])
  passControl = new FormControl('',[],[])
  showErrorMessage = false;
  constructor(
    private router: Router,
    private TaskService: TaskService
  ) { }

  ngOnInit(): void {

  
    
    //this.emailControl.valueChanges.subscribe(value =>{console.log(value)})
  }
  ngOnLoad(): void {
    
  }

  getDatos(event : Event){
    event.preventDefault();
    console.log(this.emailControl.value)
    console.log(this.passControl.value)

  }

  loginUser(event : Event){
    event.preventDefault()
    
    this.TaskService.login(this.emailControl.value,this.passControl.value).subscribe((response: any )=> {
     if(response.loginSuccesful){
      localStorage.removeItem('username');
      localStorage.setItem('username', this.emailControl.value);
      this.router.navigate(['/home'])
      console.log(localStorage.getItem("username")
      
      )
     }
     else {
      event.preventDefault()
      this.showErrorMessage = true;
      
     }
    })
  }


  getAllUsers() {
    this.TaskService.getAllUsers()
    .subscribe(users => {
      console.log(users);
    });
  }
  
}

