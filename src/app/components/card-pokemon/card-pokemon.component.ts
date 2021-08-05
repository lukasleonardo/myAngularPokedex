

import { Component, OnInit,Input } from '@angular/core';
import { Pokemon } from '../../Pokemon';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {
  @Input() pokemon:Pokemon;


  constructor() { }

  ngOnInit(): void {
  }

}
