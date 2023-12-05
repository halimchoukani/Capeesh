import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../services/shared-data.service';
import { of, filter } from 'rxjs';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  randomPhone: any;
  promoPhones: any;
  constructor(private _shared: SharedDataService) {
    of(this._shared.phones).subscribe((phones: any[]) => {
      const randomIndex = Math.floor(Math.random() * phones.length);
      this.randomPhone = phones[randomIndex];
    });
    of(this._shared.phones).subscribe((phones: any[]) => {
      this.promoPhones = phones.filter((phone: any) => phone.promo);
    });
  }
}
