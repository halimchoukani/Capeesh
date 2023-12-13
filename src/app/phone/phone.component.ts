import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterModule],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css',
})
export class PhoneComponent {
  id: any;
  phone: any;
  relatedPhones: any[] = [];
  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.phone = this.users.phones.find(
      (phone: { id: number }) => phone.id === +this.id
    );
    this.relatedPhones = this.users.RelatedPhones(
      this.phone.brand,
      this.id,
      this.phone.price
    );
  }
  addtopanier() {
    this.users.addPhoneToPanier(this.phone);
  }
  constructor(public users: UserService, private router: ActivatedRoute) {}
}
