import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from './../../Pokemon';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  pokemons: Pokemon[]=[];
  name: string;
  type: string;
  description:string;
  imgUrl:string;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    const newPkm = {
      name:this.name,
      type:this.type,
      description:this.description,
      imgUrl:this.imgUrl
    }

    this.addPokemon(newPkm);

    this.name=''
    this.type=''
    this.description=''
    this.imgUrl=''

  }

  addPokemon(pokemon:Pokemon){
    this.pokemonService.postPokemon(pokemon).subscribe((pokemon)=>this.pokemons.push(pokemon))
  }

}
