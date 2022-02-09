import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokedex, Pokemon } from '../shared/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons!: Pokemon[];
  ready: boolean = false;
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe(
      (data: Pokedex) => {
        this.pokemons = data.pokemon;
        
        this.ready = true;
      }
    )
  }
}
