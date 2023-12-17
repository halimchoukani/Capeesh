import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  user = this.users.currentUser;
  constructor(public users: UserService) {}
}
