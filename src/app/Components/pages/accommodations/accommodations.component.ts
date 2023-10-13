import { Component, ViewChild } from '@angular/core';
import { AccommodationService } from '../../services/accommodation.service';
import { Accommodation } from '../../models/accommodation';
import { HousecardsComponent } from '../../layouts/housecards/housecards.component';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule, NgFor } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SearchService } from '../../services/search.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css'],
  standalone: true,
  imports: [NgFor, HousecardsComponent, TranslateModule, FormsModule, CommonModule]
})
export class AccommodationsComponent {
  searchInput: string = '';
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

  public selectableAmenities: { name: string, nameEn: string, selected: boolean }[] = [
    { name: 'Zanzariere in tutta la struttura', nameEn: 'Mosquito Nets Throughout the Property', selected: false },
    { name: 'Doccia', nameEn: 'Shower', selected: false },
    { name: 'Doccia esterna', nameEn: 'Outdoor Shower', selected: false },
    { name: 'Frigorifero', nameEn: 'Refrigerator', selected: false },
    { name: 'Phon', nameEn: 'Hair Dryer', selected: false },
    { name: 'Culle', nameEn: 'Cribs', selected: false },
    { name: 'Aria condizionata', nameEn: 'Air Conditioning', selected: false },
    { name: 'Riscaldamento / Condizionatore autonomo', nameEn: 'Heating / Autonomous Air Conditioning', selected: false },
    { name: 'Ferro da stiro', nameEn: 'Iron', selected: false },
    { name: 'Lavatrice/Asciugatrice', nameEn: 'Washer/Dryer', selected: false },
    { name: 'Seggiolone', nameEn: 'High Chair', selected: false },
    { name: 'Vasca da bagno', nameEn: 'Bathtub', selected: false },
    { name: 'Cucina', nameEn: 'Kitchen', selected: false },
    { name: 'Forno', nameEn: 'Oven', selected: false },
    { name: 'Forno a microonde', nameEn: 'Microwave', selected: false },
    { name: 'Lavastoviglie', nameEn: 'Dishwasher', selected: false },
    { name: 'Vista sull\'oceano', nameEn: 'Ocean View', selected: false },
    { name: 'Tavolo da ping pong', nameEn: 'Ping Pong Table', selected: false },
    { name: 'Area barbecue', nameEn: 'Barbecue Area', selected: false },
    { name: 'Bicicletta', nameEn: 'Bicycle', selected: false },
    { name: 'Giardino', nameEn: 'Garden', selected: false },
    { name: 'Tennis', nameEn: 'Tennis', selected: false },
    { name: 'Veranda all\'aperto', nameEn: 'Outdoor Veranda', selected: false },
    { name: 'Parcheggio', nameEn: 'Parking', selected: false },
    { name: 'Animali domestici permessi', nameEn: 'Pets Allowed', selected: false },
    { name: 'Piscina comune', nameEn: 'Common Pool', selected: false },
    { name: 'Piscina privata', nameEn: 'Private Pool', selected: false },
    { name: 'Caminetto', nameEn: 'Fireplace', selected: false },
    { name: 'TV', nameEn: 'TV', selected: false },
    { name: 'Arredi da esterno', nameEn: 'Outdoor Furniture', selected: false },
    { name: 'Biliardo', nameEn: 'Billiards', selected: false },
    { name: 'Connessione WiFi', nameEn: 'WiFi Connection', selected: false },
    { name: 'Cortile', nameEn: 'Courtyard', selected: false },
    { name: 'Garage', nameEn: 'Garage', selected: false }
  ];




  @ViewChild('child') child?: HousecardsComponent;
  guests!: number | null;
  public houseName: string = '';
  public sortOrder: string = 'asc';
  isMobile: boolean = window.innerWidth <= 600;



  constructor(private accommodationService: AccommodationService, private titleService: Title, private metaTagService: Meta, private translate: TranslateService, private searchService: SearchService) {

    this.translate.get('accommodationsMetaTitle').subscribe((str: string) => {
      this.titleService.setTitle(str);
    });
    this.translate.get('accommodationsMetaDescription').subscribe((str: string) => {
      this.metaTagService.updateTag({ name: 'description', content: str });
    });

    this.accommodationService.getAccommodations().subscribe((accommodations) => {
      this.originalAccommodations = accommodations;
      this.filterAccommodations();
    });
  }

  ngOnInit() {
    this.searchService.currentSearch.subscribe((search) => {
      if (search) {
        this.searchInput = search;
        this.filterAccommodationsByName();
      }
    });
  }

  public loadMoreCards(): void {
    this.child?.loadMoreCards();
  }

  public onChange(selectedCity: string | null, selectedAmenity: string | null, guests: number | null): void {
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
            (!this.guests || parseInt(accommodation.guests || '0') >= this.guests);
        });
      } else if (this.selectableCities.some((city) => city.selected)) {
        this.allAccommodations = accommodations.filter((accommodation) => {
          return this.selectableCities.some((city) => city.selected && city.name === accommodation.city) &&
            (!this.guests || parseInt(accommodation.guests || '0') >= this.guests);
        });
      } else if (this.selectableAmenities.some((amenity) => amenity.selected)) {
        this.allAccommodations = accommodations.filter((accommodation) => {
          const selectedAmenities = this.selectableAmenities.filter(amenity => amenity.selected);
          return selectedAmenities.every((amenity) =>
            accommodation.amenities?.some(a => a.name.it === amenity.name)
          ) &&
            (!this.guests || parseInt(accommodation.guests || '0') >= this.guests);
        });
      } else {
        this.allAccommodations = accommodations.filter((accommodation) =>
          (!this.guests || parseInt(accommodation.guests || '0') >= this.guests)
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
      (!this.houseName || accommodation.name_it?.toLowerCase().includes(this.houseName.toLowerCase())) &&
      (!this.searchInput || accommodation.name_it?.toLowerCase().includes(this.searchInput.toLowerCase()))
    );
    console.log(this.allAccommodations);
  }

  public sortAccommodationsByPrice(): void {
    if (this.sortOrder === 'asc') {
        this.allAccommodations?.sort((a, b) => {
            let priceA = Number(a.price);
            let priceB = Number(b.price);
            return priceA - priceB;
        });
        this.sortOrder = 'desc';
    } else {
        this.allAccommodations?.sort((a, b) => {
            let priceA = Number(a.price);
            let priceB = Number(b.price);
            return priceB - priceA;
        });
        this.sortOrder = 'asc';
    }
}






}
