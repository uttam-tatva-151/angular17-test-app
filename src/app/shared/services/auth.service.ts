import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService{
  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    //request to the backend here.
    if (username === 'testUser' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}