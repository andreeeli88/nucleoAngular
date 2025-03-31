import { Injectable } from '@angular/core';
import { User } from '../types/types';
import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }


  register(user: User ){
    return createUserWithEmailAndPassword(this.auth, user.email,  user.password);
  }
  login(user:User){
    return signInWithEmailAndPassword(this.auth, user.email, user.password)
  }
  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }
  logOut(){
    return signOut(this.auth)
  }
  isCurrentUser(){
    const user = this.auth.currentUser;
    return user !== null;
  }
  getCurretUser(){
    return this.auth.currentUser;
  }



}
