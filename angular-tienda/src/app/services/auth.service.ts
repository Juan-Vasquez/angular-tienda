import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(): Observable<any> {
    return this._http.get<Users>('https://angular-tienda-dc239.firebaseio.com/users/.json')
  }
}
