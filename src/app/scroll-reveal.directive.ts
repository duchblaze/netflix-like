import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements OnInit {
  @Input() revealConfig:  object = {};

  constructor(private el: ElementRef) {}

  ngOnInit() {
   // Initialize ScrollReveal
   const sr = ScrollReveal();

   // Configure the reveal on the element when it becomes visible during scrolling
   sr.reveal(this.el.nativeElement, this.revealConfig);
  }
}
