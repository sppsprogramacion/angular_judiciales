import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from '../models/usuario.model';
import { globalConstants } from '../common/global-constants';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private readonly http: HttpClient
  ) { }
  
  //CREAR USUARIO
  crearUsuario(data: any){
    console.log("datos de formulario", data);
    delete data.password2;
    const obj: any = {
      correo: data.correo,
      nombre: data.nombre,
      apellido: data.apellido,
      clave: data.clave,
      dni: parseInt(data.dni),
      unidad_id: globalConstants.unidad
    };
    
    return this.http.post(`${environment.BASE_URL}/usuario`,obj);    
  }
  //fin CREAR USUARIO

   //ACTUALIZAR USUARIO
   actualizarUsuario(id_usuario: number, data: any){
    console.log("datos de formulario", data);
    delete data.password2;
    const obj: any = {
      correo: data.correo,
      nombre: data.nombre,
      apellido: data.apellido,
      clave: data.clave,
      dni: parseInt(data.dni),
      unidad_id: globalConstants.unidad
    };
    
    return this.http.put(`${environment.BASE_URL}/usuario/${id_usuario}`,obj);    
  }
  //fin ACTUALIZAR USUARIO
  
  //LOGIN
  login(data: any){
    //delete data.recuerdame;
    const dataLogin = {
      'email': data.correo,
      'clave': data.clave
    };
    return this.http.post(`${environment.BASE_URL}/auth/login`,dataLogin);
  }
  //FIN LOGIN

  //RETORNAR USUARIOS POR UNIDAD
  getListaUsuariosXUnidad(id_unidad: number){
    
    return this.http.get<UsuarioModel[]>(`${environment.BASE_URL}/usuario/buscar-por-unidad?id_unidad=${id_unidad}`);
  }
  //FIN RETORNAR USUARIOS POR UNIDAD

  //RETORNAR USUARIOS POR ID
  getUsuarioXId(id_usuario: number){
    
    return this.http.get<UsuarioModel>(`${environment.BASE_URL}/usuario/${id_usuario}`);
  }
  //FIN RETORNAR USUARIOS POR ID

}
