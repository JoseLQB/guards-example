import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = "";

  constructor() { }

  isAuth(): boolean{
    return this.token.length > 0;
  }
}
