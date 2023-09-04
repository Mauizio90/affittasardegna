// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, map } from 'rxjs';
// import { Accommodation } from '../models/accommodation';

// @Injectable({
//   providedIn: 'root'
// })
// export class AccommodationService {

//   constructor(private http: HttpClient) { }

//   getAccommodations(): Observable<Accommodation[]> {
//     return this.http.get<Accommodation[]>(`assets/accommodations.json`);
//   }

//   getAccommodationByMetaUrl(metaUrl: string): Observable<Accommodation> {
//     return this.http.get<Accommodation[]>(`assets/accommodations.json`).pipe(
//       map((accommodations: any[]) => accommodations.find(a => a.meta_it_url === metaUrl))
//     );
//   }

// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Accommodation } from '../models/accommodation';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  constructor(private http: HttpClient) { }

  getAccommodations(): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>('https://data.krossbooking.com/get/get-apartments?id=affittasardegna&token=457c445d46733e5ae5c910b0d4e935d1');
    
  }

  getAccommodationByMetaUrl(metaUrl: string): Observable<Accommodation> {
    return this.http.get<Accommodation[]>('https://data.krossbooking.com/get/get-apartments?id=affittasardegna&token=457c445d46733e5ae5c910b0d4e935d1').pipe(
    map((accommodations: any[]) => accommodations.find(a => a.meta_it_url === metaUrl))
    );
  }

}