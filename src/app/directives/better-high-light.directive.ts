import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighLight]',
})
export class BetterHighLightDirective implements OnInit {
  @Input() color: string = 'blue';
  @HostBinding('style.color') Elcolor: string = 'black';
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'green'
    );
  }
  @HostListener('click') click(eventData: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      this.color
    );
    this.Elcolor = '#fff';
  }
}
