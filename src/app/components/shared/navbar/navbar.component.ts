import { Component } from '@angular/core';
import { SpotifyService } from 'src/services/spotify.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  artistas: any[] = [];

  constructor(private spotify: SpotifyService) {

  }

  buscar(termino: string) {
    console.log(termino);
    this.spotify.getArtista( termino )
      .subscribe( (data:any) => {
        console.log(data.artists.items)
        this.artistas = data.artists.items;
      });
  }


}
