import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursosModule } from './cursos/curso.module';
// import { AlunosModule } from './alunos/alunos.module';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
/* Material Angular */
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
/* FIM Material Angular */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    // Modulos Curso... estão importados no Modulo de funcionalidade CursosModule
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // CursosModule, -> lazy loading
    // AlunosModule,
    // Criado um modulo de roteamento app.routing.module.ts
    // routing,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,

    /*Material Angular */
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    /* FIM Material Angular */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
