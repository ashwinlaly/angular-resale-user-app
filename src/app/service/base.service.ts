import { Injectable } from '@angular/core';
import { Headers , Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private header : Headers;
  private point = environment.url;

  constructor(private http: Http) {
    this.header = new Headers({
      'Content-Type' : 'application/json'
    });
   }

  get(url : string) : Observable<any> {
    return this.http.get(`${this.point}${url}`, {headers : this.header}).pipe(
      map(this.catchForError),
      catchError(err => throwError(err)),
      map(this.getJSON)
    );
  }

  post(url : string, data): Observable<any> {
    return this.http.post(`${this.point}${url}`, data, {headers : this.header}).pipe(
      map(this.catchForError),
      catchError(err => throwError(err)),
      map(this.getJSON),
    );
  }

  put(url : string, data) : Observable<any> {
    return this.http.put(`${this.point}${url}`,data, {headers : this.header}).pipe(
      map(this.catchForError),
      catchError(err => throwError(err)),
      map(this.getJSON)
    );
  }

  delete(url : string) : Observable <any>{
    return this.http.delete(`${this.point}${url}`, {headers : this.header}).pipe(
      map(this.catchForError),
      catchError(err => throwError(err)),
      map(this.getJSON)
    );
  }

  patch(url: string, data) : Observable<any> {
    return this.http.patch(`${this.point}${url}`, data, {headers : this.header}).pipe(
      map(this.catchForError),
      catchError(err => throwError(err)),
      map(this.getJSON)
    );
  }

  private getJSON(response : Response){
    return response.json()
  }

  private catchForError(response : Response) : Response {
    if(response.status <= 200 || response.status <= 300){
      return response;
    } else {
      const error = new Error(response.statusText);
      error['response'] = response;
      throw error;
    }
  }

}
