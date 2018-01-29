import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  distancia = 900.340;
  valorDivida = 1230.9087;
  devendoDesde = new Date(2017, 1, 1);

  constructor() { }

  ngOnInit() {
  }

  formataDistancia(valor: number, unidade: string) {
    const decimalPipe = new DecimalPipe('en');
    if (valor < 1000) {
      return `${ decimalPipe.transform(valor, '2.1-1')}m`;
    } else {
      return `${ decimalPipe.transform(valor / 1000, '2.1-1')}km`;
    }
  }
}
