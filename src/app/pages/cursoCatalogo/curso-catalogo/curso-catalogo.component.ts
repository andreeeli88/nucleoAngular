import { Component } from '@angular/core';
import { Curso } from '../../../types/types';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CursosService } from '../../../services/cursos/cursos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-curso-catalogo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './curso-catalogo.component.html',
  styleUrl: './curso-catalogo.component.css'
})
export class CursoCatalogoComponent {

  formCatalogo :  FormGroup;


  constructor(private formBuider: FormBuilder, private cursoServio: CursosService, private cursoServicio: CursosService, private router : Router){
    this.formCatalogo = this.formBuider.group({
      curso: new FormControl("", [Validators.required]),
      descripcion: new FormControl("", [Validators.required]),
      url : new FormControl("", [Validators.required])
    })
    
  }
  crearCurso(){
    if(this.formCatalogo.invalid)return;
    this.cursoServicio.guardarCurso(this.formCatalogo.value)
    .then(()=>{
      this.router.navigate(["/catalogo"])
    })
    .catch(err => console.log(err))
  }

 /*
  crearCurso(){
    const cursoNuevo : Curso= {
    //  id: 2,
      curso: this.formCatalogo.value.curso,
      descripcion: this.formCatalogo.value.descripcion,
      url: this.formCatalogo.value.url
    }
    this.cursoServio.guardarCurso(cursoNuevo)
    .then(()=>{
      console.log('registro exitoso')
      this.formCatalogo.reset()
    })
    .catch(error =>{
      console.log('registro error', error)
    })
  }*/
  
}
