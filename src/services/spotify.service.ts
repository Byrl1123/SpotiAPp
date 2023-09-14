import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service works')
   }


   getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCknsIKT1pRM3oqDf-hxHZFgWcPkKhprvukR7cNG_Mk1vTE57L9WrhBbm7rkTPHPqpt7POXPWNHjeUlFZiW-cEhiKDPC_xkGKbBRssjjCY7KGo1FwU'
    });

    return this.http.get( url, { headers });


   }


   getNewReleases() {


    return this.getQuery('browse/new-releases?country=VE&offset=0&limit=20')
          .pipe( map( (data: any) => data['albums'].items ));


   // const headers = new HttpHeaders({
   //   'Authorization': 'Bearer BQCa9lYYMS7e8u9It8zPiBgFIw2-2S6mOzLixCZJCRMcPDPaI7mAY7kTWWPj0DIyB6ggda43vJ1zru1WU5OXi4Y4GF0kqaaicWBQoZxprfwlSoeqO5k'
   // });
//

   }

   getArtistas (termino: string) {

    return this.getQuery(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`) //&type=artist&limit=15&offset=10 https://api.spotify.com/v1/artists/{id}
          .pipe( map( (data: any) => data['artistas'].items
          ));


   }


   getArtista (id: string) {

    return this.getQuery(`artist/${ id }`)
           .pipe( map( (data: any) => data['artistas'].items
           ));


    }


   getTopTracks (id: string) {

    return this.getQuery(`artists/${ id }/top-tracks`)
         // .pipe( map( (data: any) => data['tracks'].items
         // ));


    }


   }

