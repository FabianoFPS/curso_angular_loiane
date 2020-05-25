import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLightMouse]'
})
export class HighLightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){

    this._renderer.setStyle(this._elementRef.nativeElement, 'color','green');

    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){

    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color','');
    this._renderer.removeStyle(this._elementRef.nativeElement, 'color');

    this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor(){

    console.log(`Processamento extra ao modificar a varivel backgroundColor: ${this.backgroundColor}`);
    return this.backgroundColor;
  } 
  
  private backgroundColor: string;

  constructor(
    private _renderer: Renderer2,
    private _elementRef:  ElementRef
    ) { 
      console.log(this._elementRef);
    }

}
