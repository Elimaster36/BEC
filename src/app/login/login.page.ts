import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CuentasService } from '../services/cuentas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin!: FormGroup;
  usuarios: any[] = [];
  session!: boolean;

  constructor(private formBuilder: FormBuilder, private router:Router, private supabase:CuentasService, private alerta: AlertController, private alertCtrl: AlertController){}

  private initForm(): void{
    this.formularioLogin = this.formBuilder.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async ngOnInit(){
    this.initForm();
  }
  onSubmit(): void{
    console.log('Save', this.formularioLogin.value);
  }

  async Ingresar(){
    const formulario = this.formularioLogin.value;
    this.usuarios = await this.supabase.GetUsuarios(formulario.nombre);
    if (!formulario.nombre && !formulario.password) {
      const alerta = await this.alertCtrl.create({
        header: 'Campos vacíos',
        message: 'Por favor, ingresa tus credenciales',
        buttons: ['Aceptar']
      });
      await alerta.present();
    }
    for(let usuario of this.usuarios){
      if(usuario.Usuarios === formulario.nombre && usuario.Password === formulario.password){
        console.log('Encontro usuario');
        this.supabase.setSesion(true);
        this.supabase.set_currentUser(formulario.nombre);
        this.router.navigate(['home']);
      }
      else{
        const alerta = await this.alertCtrl.create({
          header: 'Datos incorrectos',
          message: 'Los datos ingresados no son correctos',
          buttons: ['Aceptar']
        });
        await alerta.present();
        console.log('No encontro usuario', usuario);
      }
    }
  }
}


