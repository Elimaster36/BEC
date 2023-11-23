import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
   }

   async buscarJuego(){
    const juegos = await this.supabase
  .from('Juegos')
  .select()
  return juegos.data || [];
   }
}
