import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

// @Output() toggle = new EventEmitter();

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
