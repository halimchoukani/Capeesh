import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@NgModule({
  imports: [HttpClientModule],
})
export class UserService {
  phones: any[] = [
    {
      name: 'Samsung Galaxy S20',
      price: 900,
      promo: true,
      image: 'assets/images/samsung.jpg',
      description:
        'Samsung Galaxy S20 5G Factory Unlocked New Android Cell Phone US Version, 128GB of Storage, Fingerprint ID and Facial Recognition, Long-Lasting Battery, Cosmic Gray',
    },
  ];
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3000/user/';

  registre(data: any) {
    return this.http.post(this.url + 'registre', data);
  }
}
