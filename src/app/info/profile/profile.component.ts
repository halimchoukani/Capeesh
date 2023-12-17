import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from '../../cart/cart.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, MatIconModule, DatePipe, CurrencyPipe, CartComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  id = this.router.snapshot.params['id'];
  user = this.users.currentUser;
  constructor(public users: UserService, private router: ActivatedRoute) {}
}
