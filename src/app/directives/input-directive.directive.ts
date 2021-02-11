import { ElementSchemaRegistry } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputDirective]'
})
export class InputDirectiveDirective {

  @Input('format') format: string;

  @HostListener('blur') onBlur(){
    console.log('blursed console');
    const value: string = this.el.nativeElement.value;
    if (this.format == 'upper') {
      this.el.nativeElement.value = value.toUpperCase();
    }
    else {
      this.el.nativeElement.value = value.toLowerCase();
    }


  }

  constructor(private el: ElementRef) { }

}

export enum Casing {
  'upper',
  'lower'
}
