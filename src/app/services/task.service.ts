import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Users } from './../interfaces/task';
import { mensajes } from '../interfaces/mensaje';
import { catchError, Observable } from 'rxjs';

const path = 'https://icaro-api-v1.herokuapp.com/api';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http:HttpClient
  ) { }

  getLC(){
    return localStorage.getItem("username")
  }
  getAllUsers() {
    
    return this.http.get<Users[]>(`${path}/users`);
  }

  login(username: string,password: string){

    return this.http.post(`${path}/login`, {username,password})
    ;
  }

  getTask(id: string) {
    const path = `https://jsonplaceholder.typicode.com/todos/${id}`;
    return this.http.get<Users>(path);
  }

  getMessges (username: String) {
    return this.http.get<mensajes[]>(`${path}/users/${username}/messages/inbox`);
  }

  getEnviados (username: String) {
    return this.http.get<mensajes[]>(`${path}/users/${username}/messages/sent`);
  }
  
  addUser(user : Users) : Observable <Users>{
    return this.http.post<Users>(`${path}/users`,user);
    
  }

  addMessage(username:String,obj : any){
    console.log('cualquier cosa')
    return this.http.post<object>(`${path}/users/${username}/messages`,obj);
    
  }
  deleteMessage(id:String){
    return this.http.delete(`${path}/messages/${id}`)
  }
  
}


