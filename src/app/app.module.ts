import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule,Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HeaderComponent } from './components/header/header.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';

const appRoutes:Routes = [
  {
    path:'',
    redirectTo:'pokemon',
    pathMatch: 'full'
  },
  {
  path:'pokemon',
  children: [
  {
    path:'', component: PokemonComponent
  },
  {
    path:'add',
    children: [
      {
        path:'',
        component:AddPokemonComponent
      },
      {
        path:':id',
        component:AddPokemonComponent
      },
    ]
  }
],
}
]

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    HeaderComponent,
    CardPokemonComponent,
    ButtonComponent,
    AddPokemonComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
