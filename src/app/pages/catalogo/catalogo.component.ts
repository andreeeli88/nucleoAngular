import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Curso } from '../../types/types';
import { CursosService } from '../../services/cursos/cursos.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  
curso : Curso[]=[

]
constructor(private router : Router, 
  private cursoService : CursosService){}
  ngOnInit(){
    this.getCursos();
    this.cursoService.loadCursostoFirebase();

  }
  goToCurso(id: number){
    this.router.navigate(['/reproductor', id])
  }
  getCursos(){
    this.cursoService.getCursos().subscribe(cursos =>{
      this.curso = cursos;
    })
  }
  deleteProduct(event: Event, id: number) {
    event.stopPropagation();
    this.cursoService.deleteProduct(id)
      .then(() => console.log("Producto eliminado con exito"))
      .catch(err => console.log(err));
  }

}
