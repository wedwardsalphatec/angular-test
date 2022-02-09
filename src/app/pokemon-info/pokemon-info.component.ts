import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../shared/pokemon';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
  pokemon: Pokemon | undefined;
  ready: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.ready = false;

        const id = params.get("id");

        if (id != null) {
          this.pokemonService.getPokemon(+id).subscribe(
            (data) => {
              this.pokemon = data;
          })
        }

        this.ready = true;
      }
    );
  }

  backClicked(): void {
    if (this.pokemon) {
      this.router.navigate(["/pokemon", this.pokemon?.id - 1])
    }
  }

  nextClicked(): void {
    if (this.pokemon) {
      this.router.navigate(["/pokemon", this.pokemon?.id + 1])
    }
  }

  viewEvolution(num: string): void {
    this.router.navigate(["/pokemon", this.pokemon?.id, "evolution", +num]);
  }
}
