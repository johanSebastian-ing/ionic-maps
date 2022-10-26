import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { sede } from '../sede';
import { SedeService } from '../sede.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
// eslint-disable-next-line no-var, @typescript-eslint/type-annotation-spacing
declare var google:any;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
// eslint-disable-next-line @typescript-eslint/type-annotation-spacing
@ViewChild('map',{static:false}) mapRef:ElementRef;
// eslint-disable-next-line @typescript-eslint/type-annotation-spacing
map:any;
// eslint-disable-next-line @typescript-eslint/type-annotation-spacing
sedes:sede[]=[];
  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  constructor(private sedeService:SedeService,private gelocation:Geolocation) { }
// eslint-disable-next-line @typescript-eslint/type-annotation-spacing
getSedes():void{
  this.sedeService.getsedes().subscribe(sedes=>{
    this.sedes=sedes;
    this.sedes.forEach(element=>{
      console.log(element);
     const marcador =new google.maps.LatLng(element.latitud,element.longirud);
     this.agregarmarcador(marcador,this.map,element.nombre,false,google.maps.Animation.BOUNCE);
    });
  });
}
  ngOnInit() {
  }
ionViewDidEnter(){this.mostrarMapa();
  this.getSedes();
}
mostrarMapa(){
  const ubicacion =new google.maps.LatLng(2.43823,-76.61316);
  const opciones={
    center:ubicacion,zoom:14
  // eslint-disable-next-line @typescript-eslint/semi
  }
  this.map=new google.maps.Map(this.mapRef.nativeElement,opciones);
  // eslint-disable-next-line @typescript-eslint/quotes
  this.agregarmarcador(ubicacion,this.map,"ciudade de popayan",false,google.maps.Animation.DROP);
  this.obterposicion(this.map);

}
agregarmarcador(posicion,mapa,titulo,dragable,animacion){
    const opcionesMarcador={
      position:posicion,
      draggable:dragable,
      animation:animacion,
      map:mapa,
      title:titulo

    };
    // eslint-disable-next-line no-var
    var marca =new google.maps.Marker(opcionesMarcador);
    return marca;
}
// eslint-disable-next-line @typescript-eslint/type-annotation-spacing
obterposicion(mapa):any{
  this.gelocation.getCurrentPosition().then(response=>{
    const actual=new google.maps.LatLng(response.coords.latitude,response.coords.longitude);
    // eslint-disable-next-line @typescript-eslint/quotes
    this.agregarmarcador(actual,this.map,"Mi Posicion",false,google.maps.Animation.BOUNCE);
  }).catch(error=>{
    console.log(error);
  });
}
}
