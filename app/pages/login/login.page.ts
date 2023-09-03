import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menuController: MenuController ,
              private alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  usuario={
    user:'',
    password:''
  }
  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Bien hecho',
      message: 'Se ha logeado correctamente',
      buttons: ['OK'],
    });
    await alert.present();
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  Login(){
    console.log('Se ha logeado correctamente');
    this.MostrarMensaje();
    this.usuario.user='';
    this.usuario.password='';
    this.router.navigate(['/inicio']);
  }
}
