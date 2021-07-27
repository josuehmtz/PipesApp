import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  EnMayusculas : boolean = true;
  heroes: Heroe[] = [
    {
    nombre:'Superman',
    vuela: true,
    color: Color.azul
    },
    {
      nombre:'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre:'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre:'IronMan',
      vuela: true,
      color: Color.rojo
    }
  ];

  ordenarPor: string = '';


  mayusculas(){
    this.EnMayusculas = !this.EnMayusculas;
  }

  cambiarorden(valor: string){
    this.ordenarPor = valor;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
