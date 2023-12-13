import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
})
export class AddproductComponent {
  ok: any;
  data = {
    id: null,
    name: null,
    brand: null,
    price: null,
    color: null,
    description: null,
    image: null,
    promo: false,
    prixPromo: null,
    qte: null,
  };
  add() {
    this.ok = this._user.addPhone(this.data);
    if (this.ok) {
      this.router.navigate(['/store']);
    } else {
      alert('Phone already exist : try another Reference');
    }
  }
  constructor(public _user: UserService, private router: Router) {}
}
