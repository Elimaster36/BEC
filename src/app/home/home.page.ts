import { Component } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Router } from '@angular/router';
import { CuentasService } from '../services/cuentas.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  juegos: any[] = [];
  encontrado!: boolean;
  session!: boolean;
  user!: string;
  buscar!: string;
  searchQuery: string = '';
  //hola muy buenas

  constructor(private gameservice: GamesService, private router: Router, private sesion: CuentasService, private busqueda:SearchService) {

  }

  async ngOnInit() {
    this.juegos = await this.busqueda.buscarJuego();
    this.juegos = await this.gameservice.getJuegos();
    this.session = this.sesion.getSesion();
    this.sesion.sesionUpdated.subscribe((sesion) => {
      this.session = sesion;
    });
    this.user = this.sesion.get_currentUser();
    this.sesion.user.subscribe((_currentUser) =>
    {this.user = _currentUser;
    });
  }

  async cerrarSesion() {
    this.sesion.setSesion(false);
    this.session = this.sesion.getSesion();
    console.log('Sesion cerrada');
    this.router.navigate(['/login']);
  }

  Buscar(){
    if(this.searchQuery.trim() !== ''){
      for(let juego of this.juegos){
      if(this.searchQuery.toLowerCase() === juego.titulo.toLowerCase()){
        this.buscar = juego.titulo;
      }else{
        this.encontrado = true;
        setTimeout(() => {
          this.encontrado = false;
        }, 2500);
      }
    }
    this.router.navigate(['/juegos/', this.buscar]).then(() => {
      location.reload();
    });
    }else{
      this.encontrado = true;
      setTimeout(() => {
        this.encontrado = false;
      }, 2500);
    }
  }
}

