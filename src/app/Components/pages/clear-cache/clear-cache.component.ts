import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-clear-cache',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clear-cache.component.html',
  styleUrls: ['./clear-cache.component.css']
})
export class ClearCacheComponent {
  cacheClearedMessage = 'Pulisci Cache';
  correctPassword: string = 'Wolpiedin';
  showButton: boolean = false


  constructor(private http: HttpClient, private metaService: Meta) { }

  ngOnInit(): void {
    this.metaService.addTag({ name: 'robots', content: 'noindex' });
  }

  clearCache(): void {
    this.http.delete('/api/cache/clear').subscribe({
      next: response => {
        console.log('Cache cleared successfully');
        this.cacheClearedMessage = 'Pulizia avvenuta con successo';
        // Gestisci la risposta qui, ad esempio aggiorna lo stato del componente
      },
      error: error => {
        console.error('There was an error clearing the cache', error);
        this.cacheClearedMessage = 'Si è verificato un errore durante la pulizia della cache';
        // Gestisci eventuali errori qui
      }
    });
  }

checkPassword(event: Event): void {
  const inputPassword = (event.target as HTMLInputElement).value;
  if (inputPassword && inputPassword.length >  0 && inputPassword === this.correctPassword) {
    this.showButton = true;
  } else {
    this.showButton = false;
  }
}


  
  

}
