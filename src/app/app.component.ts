import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Nombre: string = ' josué hiram ';
  valor: number = 1000;
  mostrarNombre(){
    console.log(this.Nombre);
    console.log(this.valor);
  }
}
