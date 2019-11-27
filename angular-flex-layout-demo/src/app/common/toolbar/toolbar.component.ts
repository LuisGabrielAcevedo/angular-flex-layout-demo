import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;
  @Output() public drawerEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
}
