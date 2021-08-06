import { Router } from '@angular/router';

import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';

import { Pokemon } from '../../Pokemon';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {
  @Input() pokemon:Pokemon;
  @Output() delPkm:EventEmitter<Pokemon> = new EventEmitter();
  @Output() editPkm:EventEmitter<Pokemon> = new EventEmitter();
  show:Boolean = false;


  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  onClick(pokemon){
    this.delPkm.emit(pokemon)
  }

  onClic(pokemon){
    this.route.navigateByUrl(`pokemon/add/${pokemon.id}`)

  }

  onDblClick(){
    this.show = !this.show;

  }

}
