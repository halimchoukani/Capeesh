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
  buy(item: any) {
    item.purchase = true;
    this.users.confirmPurchase(item.id);
  }
  constructor(public users: UserService) {}
}
