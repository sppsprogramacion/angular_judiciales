import { Component, OnInit } from '@angular/core';
import { globalConstants } from 'src/app/common/global-constants';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from '../../../services/usuarios.service';
declare const botones : any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})

export class UsuariosComponent implements OnInit {
 
  //array que se utiliza en el ngfor en el html
  lista_usuarios: UsuarioModel[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    botones();
   }

   //LISTADO COMPLETO DE USUARIOS POR UNIDAD
  listaUsuarios() {
    const id_unidad:number = globalConstants.unidad;
    this.usuariosService.getListaUsuariosXUnidad(id_unidad)
      .subscribe(
        data => {          
          
          this.lista_usuarios = data;
          
        },
        err => {
          console.log(err);
        }
      );
  }
  //FIN LISTADO COMPLETO DE INTERNOS
}