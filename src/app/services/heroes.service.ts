import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://loggin-app-2d755.firebaseio.com';

  constructor( private http: HttpClient ) { }

  crearHeroe( heroe: HeroeModel ) {
    return this.http.post(`${ this.url }/Heroes.json`, heroe)
              .pipe( map ( ( resp: any ) => {
                heroe.id = resp.name;
                return heroe;
              } ) );
  }

}
