import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registre',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css',
})
export class RegistreComponent {
  data: any = {
    username: '',
    email: '',
    adresse: '',
    password: '',
  };
  image: any;
  select(event: any) {
    this.image = event.target.files[0];
  }
  registre() {
    this._user.registre(this.data);
    this.router.navigate(['/store']);
  }
  constructor(public _user: UserService, private router: Router) {}
}
