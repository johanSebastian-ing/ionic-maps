import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { sede } from './sede';

import{catchError,map,tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SedeService {
  private contactosUrl='api/sedes';
  constructor(
  private http: HttpClient
  ) {}
  private log(message: string){
     console.log(`sedeService${message}`);
   };
 private handError<T>(operation='operation',result?: T){
  return(error: any): Observable<T>=>{
  console.error(error);
   this.log(`${operation} failed : ${error.mesagge}`);
    return of (result as T);
   };
 }
// eslint-disable-next-line @typescript-eslint/member-ordering
getsedes():  Observable<sede[]>{
return this.http.get<sede[]>(this.contactosUrl)
.pipe(
tap(_ => this.log('sede  Amacenados')),
catchError(this.handError('getsedes',[]))
);

}
}
