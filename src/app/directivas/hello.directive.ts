import { Directive,ElementRef,HostListener,Input } from '@angular/core';

//decorador
@Directive({
  selector: '[appHello]'
})
export class HelloDirective {


  @Input() appHello:string;

  constructor(private element: ElementRef) { 

    console.trace('HelloDirective constructor');

  }// constructor


  @HostListener('mouseenter')
  publiconMouseEnter(){
    console.trace('@HostListener(mouseenter)');
    this.element.nativeElement.style.backgroundColor = this.appHello;
  }// @HostListener('mouseenter')

  @HostListener('mouseleave')
  publiconMouseLeave(){
    console.trace('@HostListener(mouseleave)');
    this.element.nativeElement.style.backgroundColor = '';
  }//  @HostListener('mouseleave')



} //HelloDirective
