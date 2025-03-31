import { Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ReproductorComponent } from './pages/reproductor/reproductor.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegistroComponent } from './pages/registro/registro/registro.component';
import { CursoCatalogoComponent } from './pages/cursoCatalogo/curso-catalogo/curso-catalogo.component';
import {canActivate, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

export const routes: Routes = [
    {path: 'catalogo', component: CatalogoComponent,
      ...canActivate(()=> redirectUnauthorizedTo("/login"))
    },
  //  {path: '', redirectTo: "/home", pathMatch: 'full' },
    {path: 'reproductor', component: ReproductorComponent,
      ...canActivate(()=> redirectUnauthorizedTo("/login"))
    },
    {path: 'registro', component: RegistroComponent},
    {path: 'login', component: LoginComponent},
    {path: 'curso/registro', component: CursoCatalogoComponent}


   // {path: '**', component: }

];
