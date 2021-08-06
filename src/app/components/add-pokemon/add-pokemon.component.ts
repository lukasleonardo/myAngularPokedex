import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from './../../Pokemon';
import { Component, OnInit,  } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  pokemons: Pokemon[]=[];
  id:number
  name: string;
  type: string;
  description:string;
  imgUrl:string;

  constructor(private pokemonService:PokemonService, private activatedRoute:ActivatedRoute, private route:Router) {






  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.pokemonService.getPokemonById(this.id).subscribe(
        (pokemon:Pokemon) => this.lerPokemon(pokemon)
      )
    }else{
    this.name=''
    this.type=''
    this.description=''
    this.imgUrl=''
    }
  }

  onSubmit(){


    if(this.id){
      const newPkm = {
        id:this.id,
        name:this.name,
        type:this.type,
        description:this.description,
        imgUrl:this.imgUrl
      }
      this.editPokemon(newPkm);
      console.log('BILADA')

    }else{
      const newPkm = {
        name:this.name,
        type:this.type,
        description:this.description,
        imgUrl:this.imgUrl
      }
      this.addPokemon(newPkm);
    }

    this.name=''
    this.type=''
    this.description=''
    this.imgUrl=''

  }


  lerPokemon(pokemon:Pokemon){

    this.name=pokemon.name
    this.type=pokemon.type
    this.description=pokemon.description
    this.imgUrl=pokemon.imgUrl
  }

  addPokemon(pokemon:Pokemon){
    this.pokemonService.postPokemon(pokemon).subscribe((pokemon)=>this.pokemons.push(pokemon))
  }

  editPokemon(pokemon:Pokemon){
    this.pokemonService.putPokemon(pokemon).subscribe(()=>this.route.navigateByUrl('pokemon'))
  }

}
