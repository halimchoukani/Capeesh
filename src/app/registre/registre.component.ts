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
    let fd = new FormData();
    fd.append('username', this.data.username);
    fd.append('email', this.data.email);
    fd.append('adresse', this.data.adresse);
    fd.append('password', this.data.password);
    fd.append('image', this.image);
    this._user.registre(fd).subscribe((res) => {
      this.router.navigate(['/login']);
    });
  }
  constructor(private _user: UserService, private router: Router) {}
}
