import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <div>
      <span>{{hello}}, {{nome}}!</span>
    </div>
  `,
  styles: [`
    div {
      background-color: red;
    }
  `]
})
export class HelloWorldComponent {

  @Input()
  nome = 'Desconhecido';

  hello = 'Olá';

  constructor() {
    // this.hello = `${this.hello}, ${this.nome}!`;
  }
}
