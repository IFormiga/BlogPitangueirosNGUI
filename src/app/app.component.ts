import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  nomeNoComponentHost = 'Teste';

  idade = 0;

  destruirComponente = false;

  ngOnInit(): void {
    setInterval(() => {
     this.idade++;
    }, 3000);
  }
}
