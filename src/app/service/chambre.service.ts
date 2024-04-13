import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../../model/chambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  constructor(private http: HttpClient) { }

  getAllChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>('http://localhost:8181/api/chambres/findAllC');
  }
}