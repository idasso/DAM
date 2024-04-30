import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorear]' // Agrego ion-item para que la directiva pueda tener efecto en el tag de ionic.
})
export class ColorearDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  mouseEnter () {
    this.colorear('#ced6ff')
  }

  @HostListener('mouseleave')
  mouseLeave () {
    this.colorear('')
  }

  colorear (color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }
}