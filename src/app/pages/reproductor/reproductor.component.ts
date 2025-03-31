import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CursosService } from '../../services/cursos/cursos.service';
import { Curso } from '../../types/types';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent {
  curso : Curso | undefined
  videoUrl: SafeResourceUrl = '';

  constructor(private activateRoute: ActivatedRoute,
    private cursoService : CursosService,
    private sanitizer: DomSanitizer

  ){}
  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      const id = params['id'];
      this.cursoService.getCursoById(id).subscribe(curso => {
        this.curso = curso;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.curso.url); // Sanitizar URL
      });
    });
  }
}
