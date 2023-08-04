import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accomodation } from '../models/accomodation';

@Injectable({
  providedIn: 'root'
})
export class AccomodationsService {

  constructor(private http: HttpClient) { }

  getAccomodations(): Observable<Accomodation[]> {
    return this.http.get<Accomodation[]>(`assets/accomodations.json`);
  }

}

