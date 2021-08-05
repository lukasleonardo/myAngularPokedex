import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../Pokemon'
import { PokemonService } from 'src/app/services/pokemon.service';
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




}
