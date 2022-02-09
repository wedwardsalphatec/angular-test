import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonEvolutionComponent } from './pokemon-evolution/pokemon-evolution.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonInfoComponent,
    PokemonEvolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
