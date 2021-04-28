import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private as: AuthService) {
  }

  public setValue(v: boolean): void {
    this.as.setIsAdmin(v)
  }

  title = 'twoInOne';
}
