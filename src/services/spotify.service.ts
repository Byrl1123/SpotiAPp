import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }
// El Query, para centralizar las peticiones
  getQuery( query: string) { //esta función se usa para centralizar las peticiones al API
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB8usEIeYIM7HM0BAE4gjFR1brbqwcMwC9ZNDzcTFCOklMA3fKnUl9LW1vhZ1egmgkB8P-OMsxxz52-z7cQ--pfWLeIcHksM1e0_0QCUDnkfILE94Q'
    });

    return this.http.get(url, { headers });

  }

  // Muestra los nuevos lanzamientos

  getNewRealeases() {

    return this.getQuery('browse/new-releases?limit=20')
          .pipe( map( (data:any) => data['albums'].items));
  }

  //muestra los artistas en el search

  getArtistas( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&market=ES&limit=10`)
              .pipe( map( (data: any) =>  data['artists'].items));

  }

  //Redirecciona al artista
  getArtista( id: string ) {
    return this.getQuery(`artists/${ id }`);
              // .pipe( map( (data: any) =>  data['artists'].items));

  }

  //consigue los 10 temas más vendidos
  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?market=ES`)
              .pipe( map(data =>  data['tracks']));

  }

  }

