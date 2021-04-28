import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public IsAdmin = false;

  public setIsAdmin(val: boolean): void {
    this.IsAdmin = val;
  }

  constructor() {
  }
}
