import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado = false
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) {}

  fazerLogin(usuario: Usuario) {

    if(usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123456') {
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(this.usuarioAutenticado);
        this.router.navigate(['/']);
      } else {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(this.usuarioAutenticado);
      }
  }

  usuarioEstaAutenticado(): boolean{
    return this.usuarioAutenticado;
  }
}
