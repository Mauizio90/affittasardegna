import { Component, ViewChild } from '@angular/core';
import { AccommodationService } from '../../services/accommodation.service';
import { Accommodation } from '../../models/accommodation';
import { HousecardsComponent } from '../../layouts/housecards/housecards.component';
import { CommonModule, NgFor } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SearchService } from '../../services/search.service';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../services/seo.service';


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
    { name: 'Alghero', selected: false },
    { name: 'Badesi', selected: false },
    { name: 'Baja Sardinia', selected: false },
    { name: 'Budoni', selected: false },
    { name: 'Cala Gonone', selected: false },
    { name: 'Cannigione', selected: false },
    { name: 'Castelsardo', selected: false },
    { name: 'Capo Comino', selected: false },
    { name: 'Costa Paradiso', selected: false },
    { name: 'Golfo Aranci', selected: false },
    { name: 'Loiri Porto San Paolo', selected: false },
    { name: 'Marina di Sorso', selected: false },
    { name: 'Orosei', selected: false },
    { name: 'Palau', selected: false },
    { name: 'Pittulongu', selected: false },
    { name: 'Porto Cervo', selected: false },
    { name: 'Porto Istana', selected: false },
    { name: 'Porto Pollo', selected: false },
    { name: 'Porto Rafael', selected: false },
    { name: 'Porto Rotondo', selected: false },
    { name: 'Porto Taverna', selected: false },
    { name: 'Porto Torres', selected: false },
    { name: 'Portobello di Gallura', selected: false },
    { name: 'Posada', selected: false },
    { name: 'San Teodoro', selected: false },
    { name: 'Santa Teresa di Gallura', selected: false },
    { name: 'Siniscola', selected: false },
    { name: 'Stintino', selected: false },
    { name: 'Trinità D\'agultu - Isola Rossa', selected: false },
    { name: 'Valledoria', selected: false },
    { name: 'Viddalba', selected: false },
  ];

  public selectableAmenities: { nameShown: string, name: string, nameEn: string, nameEs: string, nameDe: string, nameFr: string, selected: boolean }[] = [
    { nameShown: '', name: 'Zanzariere in tutta la struttura', nameEn: 'Mosquito Nets Throughout the Property', nameEs: 'Mosquiteros en toda la propiedad', nameDe: 'Mückennetze in der gesamten Unterkunft', nameFr: 'Moustiquaires dans toute la propriété', selected: false },
    { nameShown: '', name: 'Doccia', nameEn: 'Shower', nameEs: 'Ducha', nameDe: 'Dusche', nameFr: 'Douche', selected: false },
    { nameShown: '', name: 'Doccia esterna', nameEn: 'Outdoor Shower', nameEs: 'Ducha al aire libre', nameDe: 'Außendusche', nameFr: 'Douche extérieure', selected: false },
    { nameShown: '', name: 'Frigorifero', nameEn: 'Refrigerator', nameEs: 'Refrigerador', nameDe: 'Kühlschrank', nameFr: 'Réfrigérateur', selected: false },
    { nameShown: '', name: 'Phon', nameEn: 'Hair Dryer', nameEs: 'Secador de pelo', nameDe: 'Haartrockner', nameFr: 'Sèche-cheveux', selected: false },
    { nameShown: '', name: 'Culle', nameEn: 'Cribs', nameEs: 'Cunas', nameDe: 'Kinderbetten', nameFr: 'Lits bébé', selected: false },
    { nameShown: '', name: 'Aria condizionata', nameEn: 'Air Conditioning', nameEs: 'Aire acondicionado', nameDe: 'Klimaanlage', nameFr: 'Climatisation', selected: false },
    { nameShown: '', name: 'Riscaldamento / Condizionatore autonomo', nameEn: 'Heating / Autonomous Air Conditioning', nameEs: 'Calefacción / Aire acondicionado autónomo', nameDe: 'Heizung / Autonome Klimaanlage', nameFr: 'Chauffage / Climatisation autonome', selected: false },
    { nameShown: '', name: 'Ferro da stiro', nameEn: 'Iron', nameEs: 'Plancha', nameDe: 'Bügeleisen', nameFr: 'Fer à repasser', selected: false },
    { nameShown: '', name: 'Lavatrice/Asciugatrice', nameEn: 'Washer/Dryer', nameEs: 'Lavadora/Secadora', nameDe: 'Waschmaschine/Trockner', nameFr: 'Lave-linge/Sèche-linge', selected: false },
    { nameShown: '', name: 'Seggiolone', nameEn: 'High Chair', nameEs: 'Trona', nameDe: 'Hochstuhl', nameFr: 'Chaise haute', selected: false },
    { nameShown: '', name: 'Vasca da bagno', nameEn: 'Bathtub', nameEs: 'Bañera', nameDe: 'Badewanne', nameFr: 'Baignoire', selected: false },
    { nameShown: '', name: 'Cucina', nameEn: 'Kitchen', nameEs: 'Cocina', nameDe: 'Küche', nameFr: 'Cuisine', selected: false },
    { nameShown: '', name: 'Forno', nameEn: 'Oven', nameEs: 'Horno', nameDe: 'Ofen', nameFr: 'Four', selected: false },
    { nameShown: '', name: 'Forno a microonde', nameEn: 'Microwave', nameEs: 'Microondas', nameDe: 'Mikrowelle', nameFr: 'Four à micro-ondes', selected: false },
    { nameShown: '', name: 'Lavastoviglie', nameEn: 'Dishwasher', nameEs: 'Lavavajillas', nameDe: 'Geschirrspüler', nameFr: 'Lave-vaisselle', selected: false },
    { nameShown: '', name: 'Vista sull\'oceano', nameEn: 'Ocean View', nameEs: 'Vistas al océano', nameDe: 'Meerblick', nameFr: 'Vue sur l\'océan', selected: false },
    { nameShown: '', name: 'Tavolo da ping pong', nameEn: 'Ping Pong Table', nameEs: 'Mesa de ping pong', nameDe: 'Tischtennisplatte', nameFr: 'Table de ping-pong', selected: false },
    { nameShown: '', name: 'Area barbecue', nameEn: 'Barbecue Area', nameEs: 'Zona de barbacoa', nameDe: 'Grillbereich', nameFr: 'Espace barbecue', selected: false },
    { nameShown: '', name: 'Bicicletta', nameEn: 'Bicycle', nameEs: 'Bicicleta', nameDe: 'Fahrrad', nameFr: 'Bicyclette', selected: false },
    { nameShown: '', name: 'Giardino', nameEn: 'Garden', nameEs: 'Jardín', nameDe: 'Garten', nameFr: 'Jardin', selected: false },
    { nameShown: '', name: 'Tennis', nameEn: 'Tennis', nameEs: 'Tenis', nameDe: 'Tennis', nameFr: 'Tennis', selected: false },
    { nameShown: '', name: 'Veranda all\'aperto', nameEn: 'Outdoor Veranda', nameEs: 'Terraza al aire libre', nameDe: 'Außenveranda', nameFr: 'Véranda extérieure', selected: false },
    { nameShown: '', name: 'Parcheggio', nameEn: 'Parking', nameEs: 'Aparcamiento', nameDe: 'Parkplatz', nameFr: 'Parking', selected: false },
    { nameShown: '', name: 'Animali domestici permessi', nameEn: 'Pets Allowed', nameEs: 'Se admiten mascotas', nameDe: 'Haustiere erlaubt', nameFr: 'Animaux domestiques autorisés', selected: false },
    { nameShown: '', name: 'Piscina comune', nameEn: 'Common Pool', nameEs: 'Piscina común', nameDe: 'Gemeinschaftspool', nameFr: 'Piscine commune', selected: false },
    { nameShown: '', name: 'Piscina privata', nameEn: 'Private Pool', nameEs: 'Piscina privada', nameDe: 'Privater Pool', nameFr: 'Piscine privée', selected: false },
    { nameShown: '', name: 'Caminetto', nameEn: 'Fireplace', nameEs: 'Chimenea', nameDe: 'Kamin', nameFr: 'Cheminée', selected: false },
    { nameShown: '', name: 'TV', nameEn: 'TV', nameEs: 'Televisión', nameDe: 'Fernseher', nameFr: 'Télévision', selected: false },
    { nameShown: '', name: 'Arredi da esterno', nameEn: 'Outdoor Furniture', nameEs: 'Muebles de exterior', nameDe: 'Gartenmöbel', nameFr: 'Mobilier d\'extérieur', selected: false },
    { nameShown: '', name: 'Biliardo', nameEn: 'Billiards', nameEs: 'Billar', nameDe: 'Billard', nameFr: 'Billard', selected: false },
    { nameShown: '', name: 'Connessione WiFi', nameEn: 'WiFi Connection', nameEs: 'Conexión WiFi', nameDe: 'WLAN-Verbindung', nameFr: 'Connexion WiFi', selected: false },
    { nameShown: '', name: 'Cortile', nameEn: 'Courtyard', nameEs: 'Patio', nameDe: 'Innenhof', nameFr: 'Cour', selected: false },
    { nameShown: '', name: 'Garage', nameEn: 'Garage', nameEs: 'Garaje', nameDe: 'Garage', nameFr: 'Garage', selected: false },
    { nameShown: '0m / 100m', name: 'Distante dal mare da 0m a 100m', nameEn: '0m to 100m from the Sea', nameEs: 'A menos de 100 metros del mar', nameDe: 'In weniger als 100 Metern Entfernung vom Meer', nameFr: 'À moins de 100 mètres de la mer', selected: false },
    { nameShown: '100m / 500m', name: 'Distante dal mare da 100m a 500m', nameEn: '100m to 500m from the Sea', nameEs: 'De 100 a 500 metros del mar', nameDe: '100 Meter bis 500 Meter vom Meer entfernt', nameFr: 'De 100 mètres à 500 mètres de la mer', selected: false },
    { nameShown: '500m / 1km', name: 'Distante dal mare da 500m a 1km', nameEn: '500m to 1km from the Sea', nameEs: 'De 500 metros a 1 kilómetro del mar', nameDe: '500 Meter bis 1 Kilometer vom Meer entfernt', nameFr: 'De 500 mètres à 1 kilomètre de la mer', selected: false },
    { nameShown: '1km / 2km', name: 'Distante dal mare da 1km a 2km', nameEn: '1km to 2km from the Sea', nameEs: 'De 1 a 2 kilómetros del mar', nameDe: '1 Kilometer bis 2 Kilometer vom Meer entfernt', nameFr: 'De 1 kilomètre à 2 kilomètres de la mer', selected: false },
    { nameShown: '2km', name: 'Distante dal mare più di 2km', nameEn: 'More than 2km from the Sea', nameEs: 'A más de 2 kilómetros del mar', nameDe: 'Mehr als 2 Kilometer vom Meer entfernt', nameFr: 'À plus de 2 kilomètres de la mer', selected: false },
  ];





  @ViewChild('child') child?: HousecardsComponent;
  guests!: number | null;
  public houseName: string = '';
  public sortOrder: string = 'asc';
  isMobile: boolean = window.innerWidth <= 600;



  constructor(private accommodationService: AccommodationService, private translate: TranslateService, private searchService: SearchService, private seo: SeoService) {
    this.accommodationService.getAccommodations().subscribe((accommodations) => {
      this.originalAccommodations = accommodations;
      this.filterAccommodations();
      this.sortAccommodationsByPrice();
    });
  }

  ngOnInit() {
    let translatedTitle = this.translate.instant('accommodationsMetaTitle');
    let translatedDescription = this.translate.instant('accommodationsMetaDescription');
    this.seo.updateTitle(translatedTitle);
    this.seo.updateDescription(translatedDescription);

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

      if (this.guests && this.guests > 0) {
        this.allAccommodations.sort((a, b) => {
          const guestsA = parseInt(a.guests || '0');
          const guestsB = parseInt(b.guests || '0');
          return guestsA - guestsB;
        });
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

  uncheckCheckbox() {
    let checkboxes = [
      document.getElementById('distanza-dropdown') as HTMLInputElement,
      document.getElementById('dotazioni-dropdown') as HTMLInputElement,
      document.getElementById('location-dropdown') as HTMLInputElement
    ];
    checkboxes.forEach(checkbox => {
      if (checkbox) {
        checkbox.checked = false;
      }
    });
  }

}
