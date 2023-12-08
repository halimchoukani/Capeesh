import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  data: any = {
    username: '',
    password: '',
  };
  users: any;

  onSubmit() {
    // if (this.data.username === 'admin' && this.data.password === 'admin') {
    //   this.router.navigate(['/store']);
    // } else {
    //   const userExists = this.users.some(
    //     (user: { username: any; password: any }) =>
    //       user.username === this.data.username &&
    //       user.password === this.data.password
    //   );
    //   if (userExists) {
    //     this.router.navigate(['/store']);
    //   } else {
    //     alert('Wrong username or password');
    //   }
    // }
  }

  constructor(private router: Router) {}
}
