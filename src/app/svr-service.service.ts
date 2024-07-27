import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvrServiceService {

  private apiUrl ='http://127.0.0.1:5000/predict';

  constructor(private http:HttpClient) { }

  getPrediction(feature:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${feature}`);
}
}
