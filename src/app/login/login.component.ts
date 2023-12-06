import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corrected property and wrapped in array
})
export class LoginComponent {
  data: any = {
    username: '',
    password: '',
  };
  users: any;

  onSubmit() {
    // Your logic for submission
    if (this.data.username === 'admin' && this.data.password === 'admin') {
      this.router.navigate(['/store']);
    } else {
      const userExists = this.users.some(
        (user: { username: any; password: any }) =>
          user.username === this.data.username &&
          user.password === this.data.password
      );

      if (userExists) {
        this.router.navigate(['/store']);
      } else {
        alert('Wrong username or password');
      }
    }
  }

  constructor(private router: Router, private _shared: SharedDataService) {
    this.users = this._shared.users;
  }
}
