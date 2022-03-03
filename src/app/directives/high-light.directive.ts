import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLight implements OnInit {
  constructor(private element: ElementRef) {}
  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
