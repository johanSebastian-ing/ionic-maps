import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

createDb(){
  // eslint-disable-next-line prefer-const
  let sedes=[
    {id:1,nombre:'Bicentenario',latidud:'2.4437423',longitud:'-76.6077775'},
    {id:2,nombre:'Encarnacion',latidud:'2.4412309',longitud:'-76.6082496'},
    {id:3,nombre:'Casa Obando',latidud:'2.4433305',longitud:'-76.6059456'},
    {id:4,nombre:'La Ximena',latidud:'2.4682823',longitud:'-76.5787026'},

  ];
  return {sedes};
}
// eslint-disable-next-line eol-last
}
