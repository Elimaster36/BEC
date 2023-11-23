import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {
    private supabase: SupabaseClient;
    private sesion!: boolean;
    sesionUpdated = new Subject<boolean>();
    private _currentUser!: string;
    user = new Subject<string>();
    constructor() { 
      this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    }
    async GetUsuarios(usuario: string){
      const cuentas = await this.supabase
      .from('Cuentas')
      .select()
      .eq('Usuarios', usuario)
  
      return cuentas.data || [];
    }

    async GetCuentas(){
      const cuentas = await this.supabase
      .from('Cuentas')
      .select("*")
      return cuentas.data || [];
    }
  
    async addUsuarios(usuario: string, email: string, password: string){
      const { error } = await this.supabase
    .from('Cuentas')
    .insert([
      { Usuarios: usuario, Email: email , Password: password },
    ])
    .select()
    }

    getSesion(){
      return this.sesion;
    }

    setSesion(iniciar: boolean){
      this.sesion = iniciar;
      this.sesionUpdated.next(this.sesion);
    }

    get_currentUser(){
      return this._currentUser;
    }
    set_currentUser(nombre:string){
      this._currentUser = nombre
      this.user.next(this._currentUser);
    }
}
