import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]'
  //aplicando a tag ou o seletor no caso par componente angular, a diretiva passa a funcionar apenas nele.
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
    ) {

    console.log(this._elementRef);

    //Evitar usar por causa de vuknerabilidade de segurança
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';

    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );

    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow')
  }

}
