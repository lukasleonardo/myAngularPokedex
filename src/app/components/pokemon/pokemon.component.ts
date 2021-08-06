import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../Pokemon'
import { PokemonService } from 'src/app/services/pokemon.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[]=[];
  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonService
    .getPokemons()
    .subscribe((pokemons)=> this.pokemons = pokemons);
  }

  deletePokemon(pokemon:Pokemon){

    this.pokemonService
    .deletePokemon(pokemon)
    .subscribe(()=>(this.pokemons = this.pokemons.filter(
      pkm => pkm.id !== pokemon.id
    )))

  }



}
