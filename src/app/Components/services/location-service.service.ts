import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  reload(): void {
    if (isPlatformBrowser(this.platformId)) {
      location.reload();
    }
  }
}
