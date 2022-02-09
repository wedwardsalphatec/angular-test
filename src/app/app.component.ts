import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    private pokemonService: PokemonService,
    private router: Router) { }

  randomPokemon(): void {
    this.pokemonService.getRandomId().subscribe(
      (data: number) => {
        this.router.navigate(['/pokemon', data]);
      }
    );
  }
}
