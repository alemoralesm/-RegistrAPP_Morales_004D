import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Anuncios } from '../interfaces/interfaces';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.page.html',
  styleUrls: ['./anuncios.page.scss'],
})
export class AnunciosPage implements OnInit {

  anuncios: Anuncios[]=[];

  constructor(private menuController: MenuController,
              private loadingCtrl : LoadingController,
              private anunciosservice: ApiService) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  ionViewWillEnter(){
    this.loadAnuncios();
    }

  async loadAnuncios(event?: InfiniteScrollCustomEvent){
    
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();


    this.anunciosservice.listarAnuncios().subscribe(
      {
        next: resp=>{
          console.log(resp);
         loading.dismiss();
          let listString = JSON.stringify(resp)
          this.anuncios=JSON.parse(listString)
          event?.target.complete();
          console.log(this.anuncios);
          
        },
        error: err =>{
          console.log(err.error.message);
         loading.dismiss();
        }
      }
    ) 
  }
}
