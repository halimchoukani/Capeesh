import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  NgZone,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('parag', { static: true }) div!: ElementRef;
  ngAfterViewInit() {
    gsap.from(this.div.nativeElement, {
      duration: 1.5,
      maskSize: '0%',
      opacity: 0,
      ease: 'ease-in',
      onComplete: () => {
        console.log('Slide down animation completed');
      },
    });
    gsap.to(this.div.nativeElement, {
      duration: 1.5,
      color: 'black',
      backgroundColor: 'white',
      opacity: 1,
      ease: 'ease-in',
      delay: 1.5,
      onComplete: () => {
        console.log('Slide down animation completed');
      },
    });

    // constructor(private ngZone: NgZone) {}

    // ngAfterViewInit(): void {
    //   this.ngZone.runOutsideAngular(() => {
    //     this.setupMouseMoveListener();
    //   });
    // }

    // private setupMouseMoveListener(): void {
    //   this.div.nativeElement.addEventListener('mouseenter', () => {
    //     document.addEventListener('mousemove', this.handleMouseMove);
    //   });

    //   this.div.nativeElement.addEventListener('mouseleave', () => {
    //     document.removeEventListener('mousemove', this.handleMouseMove);
    //   });
    // }

    // private handleMouseMove = (e: MouseEvent): void => {
    //   this.ngZone.run(() => {
    //     const xValue = e.clientX - 322 + 'px';
    //     const yValue = e.clientY - 407 + 'px';

    //     gsap.to(this.div.nativeElement, {
    //       duration: 0.3,
    //       maskPosition: xValue + ' ' + yValue,
    //       ease: 'power3.easeOut',
    //     });
    //   });
    // };
  }
}
