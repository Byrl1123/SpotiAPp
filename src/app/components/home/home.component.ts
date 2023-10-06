import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.spotify.getNewRealeases()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data
      this.loading = false
    });

  }




    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.



}
