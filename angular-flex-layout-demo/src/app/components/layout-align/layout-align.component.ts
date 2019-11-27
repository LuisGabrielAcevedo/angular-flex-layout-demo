import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-align',
  templateUrl: './layout-align.component.html',
  styleUrls: ['./layout-align.component.css']
})
export class LayoutAlignComponent implements OnInit {
  cards: object[] = [];
  constructor() {
    this.cards = [
      {
        title: 'Card 1',
        image: 'http://mla-s2-p.mlstatic.com/620403-MLA30721017955_052019-O.jpg',
        mobile: false,
        desktop: true
      },
      {
        title: 'Card 2',
        image: 'http://mla-s1-p.mlstatic.com/627661-MLA32046413106_092019-O.jpg',
        mobile: true,
        desktop: true
      },
      {
        title: 'Card 3',
        image: 'http://mla-s1-p.mlstatic.com/642115-MLA25219554553_122016-O.jpg',
        mobile: true,
        desktop: false
      }
    ];
  }

  ngOnInit() {
  }
}
