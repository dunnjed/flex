import { Component, EventEmitter, Inject, HostListener, OnInit, Output } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-sticky-menu',
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./sticky-menu.component.scss']
})
export class StickyMenuComponent implements OnInit {
  window: Window;
  navIsFixed = false;
  @Output() moved = new EventEmitter<number>();

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit() {
    this.window = window;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    // console.log('OFFSET', number);
    this.moved.emit(number);
    if (number > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }

}
