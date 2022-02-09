import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokedex } from '../shared/pokemon';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Pokedex> {
    return this.http.get<Pokedex>("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json");
  }

  getRandomId(): Observable<number> {
    return this.getAll().pipe(
      map(
        (data: Pokedex) => {
        var pokemon = data.pokemon;
        var length = pokemon.length;
        var randomNumber = Math.floor(Math.random() * (length + 1));

        return pokemon[randomNumber].id;
      })
    );
  }

  getPokemon(id: number) {
    return this.getAll().pipe(
      map(
        (data: Pokedex) => {
          var pokemon = data.pokemon.find(x => { return x.id == +id });

          return pokemon;
        }
      )
    )
  }
}
