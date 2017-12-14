import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild('colSection') colSection: ElementRef;
  @Input() navIsFixed = false;
  constructor() {

  }

  ngOnInit() {
  }

  // https://stackoverflow.com/questions/41060506/angular2-elementref-get-css-padding-attribute
  ngAfterViewInit() {
    const paddingLeft = parseInt(window.getComputedStyle(this.colSection.nativeElement, null).getPropertyValue('padding-left'), 10);
    const paddingRight = parseInt(window.getComputedStyle(this.colSection.nativeElement, null).getPropertyValue('padding-right'), 10);
    console.log('paddingLeft', paddingLeft);
    console.log('paddingRight', paddingRight);
  }

  @HostListener('window:resize', ['$event'])
  sizeChange(event) {
    console.log('size changed.', event);
  }

  movedHandler(position) {
    console.log('MOVED', position);
    if (position > 40) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && position < 40) {
      this.navIsFixed = false;
    }
  }
}
