import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.storage = localStorage;
    } else {
      this.storage = {}; // Fallback to in-memory object
    }
  }

  getItem(key: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return this.storage.getItem(key);
    }
    return this.storage[key] || null;
  }

  setItem(key: string, value: string): void {
    if (isPlatformBrowser(this.platformId)) {
      this.storage.setItem(key, value);
    } else {
      this.storage[key] = value;
    }
  }
}
