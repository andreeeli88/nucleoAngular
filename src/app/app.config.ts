import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(),  
    provideFirebaseApp(() => initializeApp(
      {"projectId":"proyectoapp2-57b95",
      "appId":"1:335383896484:web:9c85cbb8fb291c8c58e131",
      "databaseURL":"https://proyectoapp2-57b95-default-rtdb.firebaseio.com",
      "storageBucket":"proyectoapp2-57b95.firebasestorage.app",
      "apiKey":"AIzaSyDtM3HeP4g00Fda1Chugh88HdtRUhAVtC4",
      "authDomain":"proyectoapp2-57b95.firebaseapp.com",
      "messagingSenderId":"335383896484"})), 
      provideAuth(() => getAuth()), 
      
      provideFirestore(() => getFirestore())]
};
