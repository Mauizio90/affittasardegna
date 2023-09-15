import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { AccommodationService } from '../../services/accommodation.service';
import { Accommodation } from '../../models/accommodation';
import { HousecardsComponent } from '../../layouts/housecards/housecards.component';
import { Title, Meta } from '@angular/platform-browser';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@Component({
    selector: 'app-accommodations',
    templateUrl: './accommodations.component.html',
    styleUrls: ['./accommodations.component.css'],
    standalone: true,
    imports: [NgFor, HousecardsComponent, TranslateModule]
})
export class AccommodationsComponent {
  public allAccommodations?: Accommodation[];
  public originalAccommodations?: Accommodation[];
  public selectableCities: { name: string, selected: boolean }[] = [
    { name: 'Aglientu', selected: false },
    { name: 'Alghero', selected: false },
    { name: 'Badesi', selected: false },
    { name: 'Baja Sardinia', selected: false },
    { name: 'Bosa', selected: false },
    { name: 'Budoni', selected: false },
    { name: 'Cala Gonone', selected: false },
    { name: 'Cannigione', selected: false },
    { name: 'Castelsardo', selected: false },
    { name: 'Costa Paradiso', selected: false },
    { name: 'Golfo Aranci', selected: false },
    { name: 'Isola La Maddalena', selected: false },
    { name: 'Lido del Sole', selected: false },
    { name: 'Limpiddu', selected: false },
    { name: 'Loiri Porto San Paolo', selected: false },
    { name: 'Marina di Sorso', selected: false },
    { name: 'Orosei', selected: false },
    { name: 'Palau', selected: false },
    { name: 'Pittulongu', selected: false },
    { name: 'Porto Cervo', selected: false },
    { name: 'Porto Istana', selected: false },
    { name: 'Porto Rotondo', selected: false },
    { name: 'Porto Taverna', selected: false },
    { name: 'Porto Torres', selected: false },
    { name: 'Portobello di Gallura', selected: false },
    { name: 'Posada', selected: false },
    { name: 'San Giovanniu di Posada', selected: false },
    { name: 'San Teodoro', selected: false },
    { name: 'Santa Teresa di Gallura', selected: false },
    { name: 'Siniscola', selected: false },
    { name: 'Stintino', selected: false },
    { name: 'Trinità D\'agultu - Isola Rossa', selected: false },
    { name: 'Valledoria', selected: false },
    { name: 'Viddalba', selected: false },
  ];
  
  public selectableAmenities: { name: string, selected: boolean }[] = [
    { name: 'Zanzariere in tutta la struttura', selected: false },
    { name: 'Doccia', selected: false },
    { name: 'Doccia esterna', selected: false },
    { name: 'Frigorifero', selected: false },
    { name: 'Phon', selected: false },
    { name: 'Culle', selected: false },
    { name: 'Aria condizionata', selected: false },
    { name: 'Riscaldamento / Condizionatore autonomo', selected: false },
    { name: 'Ferro da stiro', selected: false },
    { name: 'Lavatrice/Asciugatrice', selected: false },
    { name: 'Seggiolone', selected: false },
    { name: 'Vasca da bagno', selected: false },
    { name: 'Cucina', selected: false },
    { name: 'Forno', selected: false },
    { name: 'Forno a microonde', selected: false },
    { name: 'Lavastoviglie', selected: false },
    { name: 'Vista sull\'oceano', selected: false },
    { name: 'Tavolo da ping pong', selected: false },
    { name: 'Area barbecue', selected: false },
    { name: 'Bicicletta', selected: false },
    { name: 'Giardino', selected: false },
    { name: 'Tennis', selected: false },
    { name: 'Veranda all\'aperto', selected: false },
    { name: 'Parcheggio', selected: false },
    { name: 'Animali domestici permessi', selected: false },
    { name: 'Piscina comune', selected: false },
    { name: 'Piscina privata', selected: false },
    { name: 'Caminetto', selected: false },
    { name: 'TV', selected: false },
    { name: 'Arredi da esterno', selected: false },
    { name: 'Biliardo', selected: false },
    { name: 'Connessione WiFi', selected: false },
    { name: 'Cortile', selected: false },
    { name: 'Garage', selected: false }
];


  
  @ViewChild('child') child?: HousecardsComponent;
  guests!: number | null;
  public houseName: string = '';


  constructor(private accommodationService : AccommodationService, private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("AffittaSardegna - Ville, Case Vacanza ed Appartamenti in affitto in Sardegna vicino la spiaggia");
    this.metaTagService.updateTag({ name: 'description', content: 'Affittiamo Ville, Case Vacanza ed Appartamenti vicino le più belle spiagge della Sardegna, a Stintino, Cala Gonone e Costa Smeralda' });
    this.accommodationService.getAccommodations().subscribe((accommodations) => {
      this.originalAccommodations = accommodations;
      this.filterAccommodations();
    });
  }

  public loadMoreCards(): void {
    this.child?.loadMoreCards();
  }

  public onChange(selectedCity: string | null, selectedAmenity: string | null, guests: number|null): void {
    this.selectableCities.forEach((city) => {
      if (city.name === selectedCity) {
        city.selected = !city.selected;
      }
    });
  
    this.selectableAmenities.forEach((amenity) => {
      if (amenity.name === selectedAmenity) {
        amenity.selected = !amenity.selected;
      }
    }
    );
    
    const guestsInput = document.getElementById("guestsInput") as HTMLInputElement;
    this.guests = guestsInput.valueAsNumber;
    this.filterAccommodations();
  }

  private filterAccommodations(): void {
    this.accommodationService.getAccommodations().subscribe((accommodations) => {
      if (this.selectableCities.some((city) => city.selected) && this.selectableAmenities.some((amenity) => amenity.selected)) {
        this.allAccommodations = accommodations.filter((accommodation) => {
          const selectedAmenities = this.selectableAmenities.filter(amenity => amenity.selected);
          return this.selectableCities.some((city) => city.selected && city.name === accommodation.city) && 
                 selectedAmenities.every((amenity) => 
                   accommodation.amenities?.some(a => a.name.it === amenity.name)
                 ) &&
                 (!this.guests || parseInt(accommodation.guests || '0') === this.guests);
        });
      } else if (this.selectableCities.some((city) => city.selected)) {
        this.allAccommodations = accommodations.filter((accommodation) => {
          return this.selectableCities.some((city) => city.selected && city.name === accommodation.city) &&
                 (!this.guests || parseInt(accommodation.guests || '0') === this.guests);
        });
      } else if (this.selectableAmenities.some((amenity) => amenity.selected)) {
        this.allAccommodations = accommodations.filter((accommodation) => {
          const selectedAmenities = this.selectableAmenities.filter(amenity => amenity.selected);
          return selectedAmenities.every((amenity) => 
            accommodation.amenities?.some(a => a.name.it === amenity.name)
          ) &&
          (!this.guests || parseInt(accommodation.guests || '0') === this.guests);
        });
      } else {
        this.allAccommodations = accommodations.filter((accommodation) =>
          (!this.guests || parseInt(accommodation.guests || '0') === this.guests)
        );
      }
      console.log(this.allAccommodations);
    });
  }
  

  public onNameChange(event: any): void {
    this.houseName = (event.target as HTMLInputElement).value;
    this.filterAccommodationsByName();
  }

  private filterAccommodationsByName(): void {
    this.allAccommodations = this.originalAccommodations?.filter((accommodation) =>
      (!this.houseName) || accommodation.name_it?.toLowerCase().includes(this.houseName.toLowerCase())
    );
    console.log(this.allAccommodations);
  }
  
  
  

  
  
}
