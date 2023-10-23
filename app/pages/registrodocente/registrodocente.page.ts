import { Component, OnInit } from '@angular/core';
import { Users } from '../interfaces/interfaces';
import { ApiService } from 'src/app/servicios/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registrodocente',
  templateUrl: './registrodocente.page.html',
  styleUrls: ['./registrodocente.page.scss'],
})
export class RegistrodocentePage implements OnInit {
  newUsuario: Users = {
    username: '',
    password: '',
    asignatura1: '',
    asignatura2: '',
    role: 'usuario',
    isactive: true,
  };

  registroForm: FormGroup;

  constructor(
    private api: ApiService,
    private router: Router,
    private builder: FormBuilder
  ) {
    this.registroForm = this.builder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      asignatura1: new FormControl('', [Validators.required]),
      asignatura2: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  crearUsuario() {
    if (this.registroForm.valid) {
      this.api.crearUsuario(this.newUsuario).subscribe();
      this.router.navigateByUrl('/login');
    } else {

    }
  }
}
