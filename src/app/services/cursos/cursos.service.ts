import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, getDoc, getDocs, onSnapshot, setDoc } from '@angular/fire/firestore';
import { Curso } from '../../types/types';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient, private firestore: Firestore) { }
  getCursos(): Observable<Curso[]> {
  const cursosRef = collection(this.firestore, "cursos");
  return collectionData(cursosRef) as Observable<Curso[]>;
}

  getCursoById(id: number): Observable<Curso>{
    const cursoRef = doc(this.firestore, "cursos", id.toString())
    return docData(cursoRef) as Observable<Curso>
  }
  

  
    guardarCurso(curso: Curso){
      const cursoRef = collection(this.firestore, "cursos");
        return getDocs(cursoRef).then(snapshot =>{
          const maxId = snapshot.docs.reduce((max, curso)=> Math.max(
            max, Number(curso.id)
          ),0)
          curso.id = maxId +1;
          return this.updateCurso(curso)
        })
 
    }
    updateCurso(curso: Curso){
      const cursoRef = doc(this.firestore, "cursos", curso.id.toString());
      return setDoc(cursoRef, curso, {merge: true});
    }
    deleteProduct(id: number) {
      const cursoRef = doc(this.firestore, "products", id.toString());
      return deleteDoc(cursoRef);
    }
    loadCursostoFirebase() {
      const cursoRef = collection(this.firestore, "cursos");
    };

}
