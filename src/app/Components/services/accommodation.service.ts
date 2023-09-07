import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { Accommodation } from '../models/accommodation';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {
  private cache$: Observable<Accommodation[]> | undefined;

  constructor(private http: HttpClient) { }

  getAccommodations(): Observable<Accommodation[]> {
    if (!this.cache$) {
      this.cache$ = this.requestAccommodations().pipe(
        shareReplay(1)
      );
    }
    return this.cache$;
  }

  // private requestAccommodations(): Observable<Accommodation[]> {
  //   return this.http.get<Accommodation[]>('https://data.krossbooking.com/get/get-apartments?id=affittasardegna&token=457c445d46733e5ae5c910b0d4e935d1'); /*`assets/accommodations.json*/
  // }

  private requestAccommodations(): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>('assets/accommodations.json'); /*`assets/accommodations.json`*/
  }

  getAccommodationByMetaUrl(metaUrl: string): Observable<Accommodation> {
    return this.getAccommodations().pipe(
      map((accommodations: any[]) => accommodations.find(a => a.meta_it_url === metaUrl))
    );
  }
}
