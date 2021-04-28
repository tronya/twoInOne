import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public setIsAdmin(val: boolean): void {
    localStorage.setItem('isAdmin', val.toString());
  }

  constructor() {
  }
}
