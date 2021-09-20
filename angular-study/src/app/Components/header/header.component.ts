import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataObj: any = {
    appTitle: "Angular Study",
    day: new Date,
    createBy: "Camis",
    valor: 59.50,
    rate: 5.56987

  }

  constructor() { }

  ngOnInit(): void {
  }

}
