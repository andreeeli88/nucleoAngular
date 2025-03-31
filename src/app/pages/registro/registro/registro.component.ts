
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../types/types';






@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  authService = inject(AuthService)
 router = inject(Router)


 form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
 })

 register(){
  if(this.form.valid){
    this.authService.register(this.form.value as User )
    .then(respuesta => {
      this.router.navigate(['/login']);
    })
  }
 }

}
