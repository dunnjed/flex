import { element } from 'protractor';
import { Component, EventEmitter, ElementRef, Inject, Input, HostListener, OnChanges, OnInit, Output } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-sticky-menu',
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./sticky-menu.component.scss']
})
export class StickyMenuComponent implements OnChanges, OnInit {

  window: Window;
  fixedMenu = false;
  @Input() parentTopPosition;
  @Input() parentWidth;
  @Input() parentPadding;

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.window = window;
  }

  ngOnChanges() {
    if (this.parentTopPosition) {
      console.log('parentTopPosition', this.parentTopPosition);
    }

    if (this.parentWidth) {
      console.log('parentWidth', this.parentWidth);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.parentTopPosition <= 0) {
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
