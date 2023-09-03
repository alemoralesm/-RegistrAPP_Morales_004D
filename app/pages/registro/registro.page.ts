import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private menuController: MenuController,
              private alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  usuario={
    nombre:'',
    apellido:'',
    carrera:'',
    email:'',
    edad:'',
    rut:''
  }

  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Bien hecho',
      message: 'Se ha registrado correctamente',
      buttons: ['OK'],
    });
    await alert.present();
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  Registro(){
    console.log('Formulario Enviado');
    this.MostrarMensaje();
    this.usuario.nombre='';
    this.usuario.apellido='';
    this.usuario.carrera='';
    this.usuario.email='';
    this.usuario.edad='';
    this.usuario.rut='';
    this.router.navigate(['/inicio']);
  }
}
