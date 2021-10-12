import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appQuotehighlight]'
})
export class QuotehighlightDirective {

  constructor(renderer:Renderer2,private element:ElementRef) { 
    // renderer.addClass(element.nativeElement,"border-danger")
    this.element.nativeElement.style.backgroundColor='lime'
  }

}
