import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { SedeService } from './sede.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [AppComponent],
  // eslint-disable-next-line max-len
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService,{dataEncapsulation:false})],
  providers: [Geolocation,NativeGeocoder,SedeService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
