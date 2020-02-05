import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appSubrayar]'
})
export class SubrayarDirective {

  @Input() appSubrayar:string;

  constructor(private element: ElementRef) { 

    console.trace('constructor subrayarDirective');

  }// constructor


  @HostListener('mouseenter')
  publiconMouseEnter(){
    console.trace(`@HostListener(mouseenter) color ${this.appSubrayar}`);
    //this.element.nativeElement.style.backgroundColor = this.appSubrayar;
    this.element.nativeElement.style.textDecorationLine = "underline";
    this.element.nativeElement.style.textDecorationColor=this.appSubrayar;
  }// @HostListener('mouseenter')

  @HostListener('mouseleave')
  publiconMouseLeave(){
    console.trace('@HostListener(mouseleave)');
    this.element.nativeElement.style.textDecorationLine = "none";
    this.element.nativeElement.style.textDecorationColor='';
   // this.element.nativeElement.style.backgroundColor = '';
  }//  @HostListener('mouseleave')



} //SubrayarDirective
