import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item: any

  meuFavorito: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.meuFavorito = !this.meuFavorito
  }

  getColor(){
    if(this.meuFavorito){
      return "black"
    } else {
      return "blue"
    }
  }

}
