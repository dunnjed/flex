import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-menu',
  templateUrl: './btn-menu.component.html',
  styleUrls: ['./btn-menu.component.scss']
})
export class BtnMenuComponent implements OnInit {

  @Output() updateData = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  update() {
    this.updateData.emit('From Button');
  }
}
