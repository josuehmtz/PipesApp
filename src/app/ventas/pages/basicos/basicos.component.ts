import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = ' josue ';
  nombreUpper: string = ' JOSUE ';
  nombreCompleto: string = ' jOsUE ';

  fecha: Date = new Date();

}
