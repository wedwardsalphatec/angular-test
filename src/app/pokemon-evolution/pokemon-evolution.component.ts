import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../shared/pokemon';

@Component({
  selector: 'app-pokemon-evolution',
  templateUrl: './pokemon-evolution.component.html',
  styleUrls: ['./pokemon-evolution.component.css']
})
export class PokemonEvolutionComponent implements OnInit {
  pokemon: Pokemon | undefined;
  evolvedFrom?: string;
  evolvesTo?: string;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get("id");

        if (id != null) {
          this.pokemonService.getPokemon(+id).subscribe(
            (data) => {
              this.pokemon = data;

              this.getEvolutions();
          })
        }
      }
    );
  }

  private getEvolutions(): void {
    this.evolvedFrom = undefined;
    this.evolvesTo = undefined;

    if (this.pokemon?.prev_evolution != undefined) {
      var length = this.pokemon?.prev_evolution.length;

      this.evolvedFrom = this.pokemon.prev_evolution[length - 1].name;
    }

    if (this.pokemon?.next_evolution != undefined) {
      var length = this.pokemon?.next_evolution.length;

      this.evolvesTo = this.pokemon.next_evolution[0].name;
    }
  }
}
