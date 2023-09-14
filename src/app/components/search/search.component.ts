import { Component } from '@angular/core';
import { SpotifyService } from 'src/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {




  artistas: any[] = [];
  Spotify: any;
  loading: boolean = false;

  constructor( private spotify: SpotifyService) {


  }

  buscar(termino: string) {
    console.log(termino)

  this.loading = true;
    this.spotify.getArtista( termino )
      .subscribe( data => {
        this.artistas = data.artists.items;
        this.loading = false;
    })
  }

}
