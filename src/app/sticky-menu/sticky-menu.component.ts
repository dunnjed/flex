import { Component, EventEmitter, ElementRef, Inject, Input, HostListener, OnChanges, OnInit, Output } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-sticky-menu',
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./sticky-menu.component.scss']
})
export class StickyMenuComponent implements OnInit {

  window: Window;
  fixedMenu = false;
  @Input() parent;
  @Input() height;

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.window = window;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const top = this.parent.getBoundingClientRect().top;
    if (top <= 0) {
      this.fixedMenu = true;
    } else {
      this.fixedMenu = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  sizeChange(event) {
    // console.log('size changed.', event);
  }

}
