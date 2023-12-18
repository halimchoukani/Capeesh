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
    price: 0,
    color: null,
    description: null,
    image: null,
    promo: false,
    prixPromo: 0,
    qte: null,
  };
  add() {
    console.log(this.data);
    this.ok = this._user.addPhone(this.data);
    if (this.ok) {
      this.router.navigate(['/store']);
    }
  }
  constructor(public _user: UserService, private router: Router) {}
}
