import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //i18nSelect
  nombre: string = 'Josue';
  genero: string = 'masculino';
  invitacionMapa = {
    'femenino' : 'invitarla',
    'masculino' : 'invitarlo'
  }

  //i18nPlural
  Clientes: string[] = ['Josue', 'Fernando', 'Daniel'];
  clientesmapa = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un   cliente esperando.',
    'other' : 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre = 'Marisol';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.Clientes.shift();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Josue Hiram',
    edad: 20,
    direccion: 'Zapopan, Jalisco.'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  //Async Pipe
  myObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa.');
    }, 3500);
  });

}
