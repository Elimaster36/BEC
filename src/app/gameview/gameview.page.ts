import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-gameview',
  templateUrl: './gameview.page.html',
  styleUrls: ['./gameview.page.scss'],
})
export class GameviewPage implements OnInit {
  nombre!: any;
  juegos: any[]=[];
  constructor(private route: ActivatedRoute, private gameservice: GamesService){
    this.nombre = this.route.snapshot.paramMap.get('nombre');
  }
  async ngOnInit(){
    this.juegos = await this.gameservice.getJuegoNombre(this.nombre);
    console.log('this.juegos', this.nombre);
  }
}

