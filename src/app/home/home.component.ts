import { Component, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of, filter } from 'rxjs';
import { gsap } from 'gsap/gsap-core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChild('cont', { static: true }) cont: any;

  ngAfterViewInit() {
    gsap.from('.image', {
      duration: 1,
      opacity: 0,
      delay: 1,
      x: '100%',
      ease: 'power3.out',
      onComplete: () => {
        console.log('Slide down animation completed');
      },
    });
    gsap.from('.det', {
      duration: 1,
      opacity: 0,
      x: '-200%',
      ease: 'power3.out',
      delay: 0.5,
      stagger: 0.5,
      onComplete: () => {
        console.log('Slide down animation completed');
      },
    });
    gsap.from('#title', {
      duration: 1,
      opacity: 0,
      x: '-100%',
      ease: 'power3.out',
      delay: 2,
      onComplete: () => {
        console.log('Slide down animation completed');
      },
    });
  }

  randomPhone: any;
  promoPhones: any;
  constructor(private _shared: UserService) {
    of(this._shared.phones).subscribe((phones: any[]) => {
      const randomIndex = Math.floor(Math.random() * phones.length);
      this.randomPhone = phones[randomIndex];
    });
    of(this._shared.phones).subscribe((phones: any[]) => {
      this.promoPhones = phones.filter((phone: any) => phone.promo);
    });
  }
}
