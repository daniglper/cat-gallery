import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const endpoint = 'https://api.thecatapi.com/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public getRazas(): Observable<any> {
    return this.http.get<any>(endpoint + "breeds");
  }

  public getInfo(razaId: String): Observable<any> {
    return this.http.get<any>(endpoint + "images/search?breed_id=" + razaId);
  }
}
