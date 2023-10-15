import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  updateTitle(title: string) {
    this.title.setTitle(title);
    this.meta.updateTag({ property: 'og:title', content: title });
    console.log('Metatag "og:title" aggiornato con successo:', title);
  }
  
  updateDescription(desc: string) {
    this.meta.updateTag({ property: 'description', content: desc });
    this.meta.updateTag({ property: 'og:description', content: desc });
    console.log('Metatag "description" e "og:description" aggiornati con successo:', desc);
  }
  
  updateImage(image: string) {
    this.meta.updateTag({ property: 'og:image', content: image });
    console.log('Metatag "og:image" aggiornato con successo:', image);
  }
  
}
