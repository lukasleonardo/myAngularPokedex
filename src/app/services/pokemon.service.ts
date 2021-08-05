import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Pokemon } from '../Pokemon';

const httpOpt = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pkmUrl='http://localhost:5000/Pokemon';
  constructor(private http:HttpClient) { }

  getPokemons():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.pkmUrl);
  }

  postPokemon(pokemon:Pokemon):Observable<Pokemon>{
    return this.http.post<Pokemon>(this.pkmUrl,pokemon,httpOpt);
  }



}
