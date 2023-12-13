import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { gsap } from 'gsap/gsap-core';
@Component({
  selector: 'app-store',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent {
  ngAfterViewInit() {
    gsap.from('.image', {
      duration: 1,
      opacity: 0,
      stagger: 0.1,
      x: '100%',
      ease: 'power3.out',
      onComplete: () => {
        console.log('Slide down animation completed');
      },
    });
  }

  constructor(public users: UserService) {}
}
