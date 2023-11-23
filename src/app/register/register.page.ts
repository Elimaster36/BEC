import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CuentasService } from '../services/cuentas.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formularioLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router, private supabase:CuentasService, private navCtrl: NavController){}

  private initForm(): void{
    this.formularioLogin = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async ngOnInit(){
    this.initForm();
  }
  onSubmit(): void{
    console.log('Save', this.formularioLogin.value);
  }

  async Registrar(){
    const formulario = this.formularioLogin.value;
    await this.supabase.addUsuarios(formulario.nombre, formulario.email, formulario.password);
    this.router.navigate(['/login']);
  }

  cancelar(){
    this.navCtrl.navigateBack('/login');
  }
}
