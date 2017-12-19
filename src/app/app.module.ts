import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StickyMenuComponent } from './sticky-menu/sticky-menu.component';
import { BtnMenuComponent } from './btn-menu/btn-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    StickyMenuComponent,
    BtnMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
