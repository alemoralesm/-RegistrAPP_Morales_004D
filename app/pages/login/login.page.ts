import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata:any;

  usuario={
    id:0,
    username:"",
    password:"",
    asignatura1:"",
    asignatura2:"",
    role:"",
    isactive: true
  }

  loginForm :FormGroup;

  constructor(private authservice: AuthService,
              private router: Router,
              private alertController: AlertController, 
              private toastController: ToastController, 
              private builder: FormBuilder){
                this.loginForm = this.builder.group({
                  'username': new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(4)])
                })
              }

  ngOnInit() {
   this.resetForm(); 
  }
            
  resetForm() {
    this.loginForm.reset();
      console.log('Formulario restablecido');
  }

  login(){
    if (this.loginForm.valid){
      this.authservice.GetUserById(this.loginForm.value.username).subscribe(resp=>{ 
        this.userdata=resp;
        console.log(this.userdata);
        if (this.userdata.length>0){    //si cumple la condición el objeto trae datos
          this.usuario={                //userdata llega en formato de arreglo
            id : this.userdata[0].id,
            username: this.userdata[0].username,
            password: this.userdata[0].password,
            asignatura1: this.userdata[0].asignatura1,
            asignatura2: this.userdata[0].asignatura2,
            role: this.userdata[0].role,
            isactive: this.userdata[0].isactive
          }
          if (this.usuario.password===this.loginForm.value.password)
          {
            if (this.usuario.isactive){
              //iniciamos sesión del usuario 
              sessionStorage.setItem('username', this.usuario.username);
              sessionStorage.setItem('userrole', this.usuario.role);
              sessionStorage.setItem('ingresado', 'true');
              //invocamos una alerta utilizando Toast
              this.showToast(`¡Hola, ${this.usuario.username}! Sesión Iniciada`);;
              this.router.navigateByUrl("/inicio");

            }
            else{     
              this.UserInactivo();

            }
          }
          else{
            this.Error();
          }
        }
        else{     
          this.loginForm.reset();
          this.NoExiste();
        }


      })

    }

  }
  async showToast(msg: any){
    const toast= await this.toastController.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }



  async UserInactivo(){
    const alerta = await this.alertController.create({ 
      header : 'Usuario inactivo',
      message : 'Contactar a admin@admin.cl',
      buttons : ['OK']
    })
    alerta.present();
  }



async Error(){
  const alerta = await this.alertController.create({ 
    header : 'Error..',
    message : 'Revise sus credenciales',
    buttons : ['OK']
  })
  alerta.present();
}



async NoExiste(){
  const alerta = await this.alertController.create({ 
    header : 'No existe...',
    message : 'Debe registrarse..',
    buttons : ['OK']
  })
  alerta.present();
}




}
