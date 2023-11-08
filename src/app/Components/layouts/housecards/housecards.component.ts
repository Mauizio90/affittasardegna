import { Component, Input } from '@angular/core';
import { Accommodation } from '../../models/accommodation';
import { faBathtub, faBed, faWifi, faLocationDot, faMosquitoNet, faShower, faSnowflake, faKitchenSet, faTableTennis, faBicycle, faSeedling, faSquareParking, faPaw, faWaterLadder, faTv, faWarehouse} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor, SlicePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
    selector: 'app-housecards',
    templateUrl: './housecards.component.html',
    styleUrls: ['./housecards.component.css'],
    standalone: true,
    imports: [NgFor, FontAwesomeModule, SlicePipe, CommonModule, TranslateModule, CarouselModule],
    providers: [
        { provide: CarouselConfig, useValue: { interval: 0, noPause: true, showIndicators: true, animation: true } }
      ]
})
export class HousecardsComponent {
  faBathtub = faBathtub;
  faBed = faBed;
  faWifi = faWifi;
  faLocationDot = faLocationDot;
  faMosquitoNet = faMosquitoNet;
  faShower = faShower;
  faSnowflake = faSnowflake;
  faKitchenSet = faKitchenSet;
  faTableTennis = faTableTennis;
  faBicycle = faBicycle;
  faSeedling = faSeedling;
  faSquareParking = faSquareParking;
  faPaw = faPaw;
  faWaterLadder = faWaterLadder;
  faTv = faTv;
  faWarehouse = faWarehouse;
  @Input() public accommodations?: Accommodation[];
  public cardsToShow: number = 25;

  public loadMoreCards(): void {
    if (this.cardsToShow < this.accommodations!.length) {
      this.cardsToShow += 25;
    }
  }
  

  constructor(private gaService: GoogleAnalyticsService) { }

  trackEvent(eventName: string) {
    this.gaService.event(eventName, 'click', eventName);
  }



  hasWifi(accommodation: any): boolean {
    if(accommodation && accommodation.amenities) {
      return accommodation.amenities.some((amenity: any) => amenity && amenity.name && amenity.name.it === 'Connessione WiFi');
    }
    return false;
  }  
  
  hasMosquitoNets(accommodation: any): boolean {
    if(accommodation && accommodation.amenities) {
      return accommodation.amenities.some((amenity: any) => amenity && amenity.name && amenity.name.it === 'Zanzariere in tutta la struttura');
    }
    return false;
  }
  
  hasShower(accommodation: any): boolean {
    if(accommodation && accommodation.amenities) {
      return accommodation.amenities.some((amenity: any) => amenity && amenity.name && amenity.name.it === 'Doccia');
    }
    return false;
  }
  
  hasAirConditioning(accommodation: any): boolean {
    if(accommodation && accommodation.amenities) {
      return accommodation.amenities.some((amenity: any) => amenity && amenity.name && amenity.name.it === 'Aria condizionata');
    }
    return false;
  }
  
  hasKitchen(accommodation: any): boolean {
    if(accommodation && accommodation.amenities) {
      return accommodation.amenities.some((amenity: any) => amenity && amenity.name && amenity.name.it === 'Cucina');
    }
    return false;
  }
  
  hasPingPongTable(accommodation: any): boolean {
    if(accommodation && accommodation.amenities) {
      return accommodation.amenities.some((amenity: any) => amenity && amenity.name && amenity.name.it === 'Tavolo da ping pong');
    }
    return false;
  }
  
  hasBicycle(accommodation: any): boolean {
    if(accommodation && accommodation.amenities) {
      return accommodation.amenities.some((amenity: any) => amenity && amenity.name && amenity.name.it === 'Bicicletta');
    }
    return false;
  }
  
  hasGarden(accommodation: any): boolean {
    if(accommodation && accommodation.amenities) {
      return accommodation.amenities.some((amenity: any) => amenity && amenity.name && amenity.name.it === 'Giardino');
    }
    return false;
  }
  
  hasParking(accommodation: any): boolean {
    if(accommodation && accommodation.amenities) {
      return accommodation.amenities.some((amenity: any) => amenity && amenity.name && amenity.name.it === 'Parcheggio');
    }
    return false;
  }
  
  hasPetsAllowed(accommodation: any): boolean {
    if(accommodation && accommodation.amenities) {
      return accommodation.amenities.some((amenity: any) => amenity && amenity.name && amenity.name.it === 'Animali domestici permessi');
    }
    return false;
  }
  
  hasPrivatePool(accommodation: any): boolean {
    if(accommodation && accommodation.amenities) {
      return accommodation.amenities.some((amenity: any) => amenity && amenity.name && amenity.name.it === 'Piscina privata');
    }
    return false;
  }
  
  hasTV(accommodation: any): boolean {
    if(accommodation && accommodation.amenities) {
      return accommodation.amenities.some((amenity: any) => amenity && amenity.name && amenity.name.it === 'TV');
    }
    return false;
  }
  
  hasGarage(accommodation: any): boolean {
    if(accommodation && accommodation.amenities) {
      return accommodation && accommodation.amenities && accommodation.amenities.some((amenity: any) => amenity.name.it === 'Garage');
    }
    return false;
  }
  



}
