import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonEvolutionComponent } from './pokemon-evolution/pokemon-evolution.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';

const routes: Routes = [
  { path: 'pokemon/0', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'pokemon/:id', 
    component: PokemonInfoComponent,
    children: [
      { path: 'evolution/:id', component: PokemonEvolutionComponent }
    ]
   },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
