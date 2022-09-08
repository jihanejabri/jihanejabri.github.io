import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import {User} from '../models/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  badeURI = environment.apiUrl;

  constructor(private router: Router,private http: HttpClient) {
  this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') as string));
  this.user = this.userSubject.asObservable();
  }

  public signIn({ username, password }: any): Observable<any> {
    if (username === 'jihane@admin' && password === 'jihane123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ lastName: 'jihane', username: 'jihane' });
    }
    return throwError(new Error('Failed to login'));
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signIn']);
  }

  public signUp(user: User) {
    return this.http.post(this.badeURI + `/users`, user);
  }
}
