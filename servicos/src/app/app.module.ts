import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosInjecaoDeDependenciasComponent } from './cursos-injecao-de-dependencias/cursos-injecao-de-dependencias.component';
import { CursosService2 } from './cursos-injecao-de-dependencias/cursos.serviceInjecaoDeDependencia';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { Curso3Module } from './cursos3/cursos3.module';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursosInjecaoDeDependenciasComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule,
    Curso3Module
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [CursosService2],
  bootstrap: [AppComponent]
})
export class AppModule { }
