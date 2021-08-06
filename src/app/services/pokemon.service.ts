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

  getPokemonById(id):Observable<Pokemon>{
    const getUrl = `${this.pkmUrl}/${id}`;
    return this.http.get<Pokemon>(getUrl)
  }

  putPokemon(pokemon:Pokemon):Observable<Pokemon>{
    const delUrl = `${this.pkmUrl}/${pokemon.id}`;
    return this.http.put<Pokemon>(delUrl,pokemon,httpOpt)
  }

  postPokemon(pokemon:Pokemon):Observable<Pokemon>{
    return this.http.post<Pokemon>(this.pkmUrl,pokemon,httpOpt);
  }

  deletePokemon(pokemon:Pokemon):Observable<Pokemon>{
    const delUrl = `${this.pkmUrl}/${pokemon.id}`;
    return this.http.delete<Pokemon>(delUrl)
  }

}
