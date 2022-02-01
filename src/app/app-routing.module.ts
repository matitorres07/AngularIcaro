import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltasComponent } from './altas/altas.component';
import { EnviadosComponent } from './enviados/enviados.component';
import { HomeComponent } from './home/home.component';
import { LoginSuccesComponent } from './login-succes/login-succes.component';
import { LoginComponent } from './login/login.component';
import { MensajesComponent } from './mensajes/mensajes.component';



const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'enviados', component:EnviadosComponent},
  {path:'mensajes', component:MensajesComponent},
  {path:'altas', component:AltasComponent},
  {path:'alta', component:LoginSuccesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
