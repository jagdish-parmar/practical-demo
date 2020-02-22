import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  setUser(user) {
    localStorage.setItem("type", user)
  }
  setUid(uid) {
    localStorage.setItem("uid", uid)
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    localStorage.clear()
    this.myRoute.navigate(["/login"]);
  }
}
