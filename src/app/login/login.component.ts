import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

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

  onSubmit() {
    // if (this.data.username === 'admin' && this.data.password === 'admin') {
    //   this.router.navigate(['/store']);
    // } else {
    //
    //   if (userExists) {
    //     this.router.navigate(['/store']);
    //   } else {
    //     alert('Wrong username or password');
    //   }
    // }
    this.users.login(this.data);
  }

  constructor(private router: Router, public users: UserService) {}
}
