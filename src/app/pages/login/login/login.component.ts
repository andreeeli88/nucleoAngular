import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../types/types';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authservice = inject(AuthService);
  router = inject(Router)

  formLofin = new FormGroup({
      email : new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
  })

  login(){
    if(this.formLofin.valid){
      this.authservice.login(this.formLofin.value as User)
      .then(respuesta => {
        this.router.navigate(['/catalogo'])
      })
    }
  }

}
