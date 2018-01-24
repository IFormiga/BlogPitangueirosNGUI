import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  Input
} from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent implements OnInit, OnChanges,
  OnDestroy {

  pessoa = {
    nome: 'Thiago',
    telefone: '8983266352542'
  };

  private _idade: number;
  @Input()
  set idade(val: number) {
    // validação
    if (val > 0) {
      this._idade = val;
    }
  }
  get idade(): number {
    return this._idade;
  }

  constructor() {
   // this.idade = 30;
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

}
