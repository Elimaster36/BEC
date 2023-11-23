import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { SupabaseClient, createClient } from '@supabase/supabase-js';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
   }

  async getJuegosCategoria(genero: string){
    const juegos = await this.supabase
  .from('Juegos')
  .select()
  .eq('categorias', genero)
  return juegos.data || [];
   }

   async getJuegos(){
    const juegos = await this.supabase
  .from('Juegos')
  .select()
  return juegos.data || [];
   }

   async getJuegoNombre(nombre: string){
    const juegos = await this.supabase
  .from('Juegos')
  .select()
  .eq('titulo', nombre)
  return juegos.data || [];
   }
}
