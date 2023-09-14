import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {


  artista: any = {};


  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {

    this.router.params.subscribe( params => {
      this.getArtista(   params['id'] );
      this.getTopTracks( params['id'] )

    });

   };

   getArtista( id: string ){

    this.spotify.getArtista( id )
    .subscribe( artista => {
      console.log(artista);
      this.artista = SpotifyService;
    });

   }


   getTopTracks( id: string ) {
    this.spotify.getTopTracks( id )
          .subscribe( topTracks => {
            console.log(topTracks);
          });

  }


}
