import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, shareReplay, switchMap, tap } from 'rxjs';
import { Accommodation } from '../models/accommodation';
import { BehaviorSubject } from 'rxjs';
import { EMPTY } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AccommodationService {
  private cache$: Observable<Accommodation[]> = EMPTY;
  private cacheUpdateTrigger$ = new BehaviorSubject<void>(undefined);
  private currentData: Accommodation[] = [];


  constructor(private http: HttpClient) {
    // Initialize the cache$ observable
    this.cache$ = this.cacheUpdateTrigger$.pipe(
      switchMap(() => this.requestAccommodations()),
      shareReplay(1)
    );
  }

  getAccommodations(): Observable<Accommodation[]> {
    return this.cache$;
  }

  private requestAccommodations(): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>('/api/accommodations')
      .pipe(
        tap(newData => {
          // Compare new data with cached data
          const isNewDataDifferent = JSON.stringify(this.currentData) !== JSON.stringify(newData);
          if (isNewDataDifferent) {
            // Update the cache if the new data is different
            this.currentData = newData;
            this.cache$ = of(newData); // Use the 'of' operator to create a new Observable
          }
        })
      );
  }

  
  // private requestAccommodations(): Observable<Accommodation[]> {
  //   return this.http.get<Accommodation[]>('assets/accommodations.json'); /*`assets/accommodations.json`*/
  // }

  /* getAccommodationByMetaUrl(metaUrl: string): Observable<Accommodation> {
    return this.getAccommodations().pipe(
      map((accommodations: any[]) => accommodations.find(a => a.meta_it_url === metaUrl))
    );
  } */
   
}
