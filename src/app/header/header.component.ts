import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // Correct plural form
})
export class HeaderComponent implements AfterViewInit {
  clicked = false;

  @ViewChild('nav', { static: true }) nav!: ElementRef;

  ngAfterViewInit() {
    gsap.from(this.nav.nativeElement, {
      duration: 0.5,
      y: '-100%',
      opacity: 0,
      ease: 'ease-in',
      onComplete: () => {
        console.log('Slide down animation completed');
      },
    });
    gsap.from('#header-title', {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      x: '-200%',
      ease: 'power3.out',
      onComplete: () => {
        console.log('Slide down animation completed');
      },
    });
    gsap.from('.links', {
      duration: 1,
      delay: 0.5,
      stagger: 0.5,
      opacity: 0,
      x: '60%',
      ease: 'ease-in',
      onComplete: () => {
        console.log('Slide down animation completed');
      },
    });
    gsap.from('#search', {
      duration: 1,
      x: '70%',
      opacity: 0,
      ease: 'ease-in',
      delay: 1,
      onComplete: () => {
        console.log('Slide down animation completed');
      },
    });
    gsap.from('#login', {
      duration: 1,
      x: '100%',
      opacity: 0,
      ease: 'ease-in',
      delay: 1.5,
      onComplete: () => {
        console.log('Slide down animation completed');
      },
    });
  }
}
