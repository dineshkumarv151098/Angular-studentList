import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el : ElementRef) {}

  private highlight (color : string){
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('darkslateblue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('rgb(235, 119, 119)');
  }
  // @HostListener('click') onMouseClick() {
  //   this.highlight('red');
  // }
}
