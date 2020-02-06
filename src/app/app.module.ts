import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EjemploClaseComponent } from './paginas/ejemplo-clase/ejemplo-clase.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { FormsModule } from '@angular/forms';
import { JuegoComponent } from './paginas/juego/juego.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { HelloDirective } from './directivas/hello.directive';
import { SubrayarDirective } from './directivas/subrayar.directive';
import { AnimalesPipe } from './pipes/animales.pipe';
import { FooterComponent } from './componentes/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    BotonComponent,
    InicioComponent,
    ArraysComponent,
    NavbarComponent,
    EjemploClaseComponent,
    PokemonRestComponent,
    EstilosComponent,
    JuegoComponent,
    DirectivasComponent,
    FiltrosComponent,
    HelloDirective,
    SubrayarDirective,
    AnimalesPipe,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule, //modulo para llamadas HTTP
    AppRoutingModule,
    FormsModule //modulo para formus con banan in a box
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
