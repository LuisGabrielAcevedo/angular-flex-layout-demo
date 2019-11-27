import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})
export class TableExampleComponent implements OnInit {
  headers: IHeader[] = [];
  data: IItem[] = [];
  openRows: number[] = [];
  constructor() {
    this.headers = [
      { name: 'Full name', key: 'name', mobile: true },
      { name: 'Email', key: 'email', mobile: true },
      { name: 'Dni', key: 'dni', mobile: false },
      { name: 'Status', key: 'active', mobile: false }
    ];

    this.data = [
      {
        name: 'Luis gabriel',
        email: 'luis@globant.com',
        dni: '12345678',
        active: 'Ok'
      },
      {
        name: 'Luis gabriel',
        email: 'luis@globant.com',
        dni: '12345678',
        active: 'Ok'
      },
      {
        name: 'Luis gabriel',
        email: 'luis@globant.com',
        dni: '12345678',
        active: 'Ok'
      },
      {
        name: 'Luis gabriel',
        email: 'luis@globant.com',
        dni: '12345678',
        active: 'Ok'
      },
      {
        name: 'Luis gabriel',
        email: 'luis@globant.com',
        dni: '12345678',
        active: 'Ok'
      }
    ];
  }

  ngOnInit() {
  }

  openRow(i: number) {
    this.openRows.push(i);
  }

  closeRow(i: number) {
    this.openRows.splice(this.openRows.indexOf(i), 1);
  }
}

export interface IHeader {
  name: string;
  key: string;
  mobile: boolean;
}

export interface IItem {
  [key: string]: any;
}
