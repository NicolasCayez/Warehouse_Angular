import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { User, Users } from '../../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly http = inject(HttpClient);

  getAll(pageIndex = 1): Observable<Users> {
    return this.http.get<Users>(environment.apis.users);
  }

  // addUser(user:User): Observable<User> {
  addUser(user:User) {
    console.log("service ", user);
    // return this.http.post<User>(environment.apis.users, user);
    this.http.post(environment.apis.users, user).subscribe({
    // this.http.post('users', user).subscribe({
      next: (data: any) => {
        console.log('cours ajouté :', data);
      },
      error: (err) => {
        console.error('Erreur addUser :', err);
      }
    });
  }
}
