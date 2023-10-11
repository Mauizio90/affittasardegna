import { Component, Input } from '@angular/core';
import { Accommodation } from '../../models/accommodation';
import { faBathtub, faBed, faWifi, faLocationDot, faMosquitoNet, faShower, faSnowflake, faKitchenSet, faTableTennis, faBicycle, faSeedling, faSquareParking, faPaw, faWaterLadder, faTv, faWarehouse} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor, SlicePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';

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
    this.cardsToShow += 25;
  }


  hasWifi(accommodation: any): boolean {
    return accommodation.amenities.some((amenity: any) => amenity.name.it === 'Connessione WiFi');
  }

  hasMosquitoNets(accommodation: any): boolean {
    return accommodation.amenities.some((amenity: any) => amenity.name.it === 'Zanzariere in tutta la struttura');
  }

  hasShower(accommodation: any): boolean {
      return accommodation.amenities.some((amenity: any) => amenity.name.it === 'Doccia');
  }

  hasAirConditioning(accommodation: any): boolean {
      return accommodation.amenities.some((amenity: any) => amenity.name.it === 'Aria condizionata');
  }

  hasKitchen(accommodation: any): boolean {
      return accommodation.amenities.some((amenity: any) => amenity.name.it === 'Cucina');
  }

  hasPingPongTable(accommodation: any): boolean {
      return accommodation.amenities.some((amenity: any) => amenity.name.it === 'Tavolo da ping pong');
  }

  hasBicycle(accommodation: any): boolean {
      return accommodation.amenities.some((amenity: any) => amenity.name.it === 'Bicicletta');
  }

  hasGarden(accommodation: any): boolean {
      return accommodation.amenities.some((amenity: any) => amenity.name.it === 'Giardino');
  }

  hasParking(accommodation: any): boolean {
      return accommodation.amenities.some((amenity: any) => amenity.name.it === 'Parcheggio');
  }

  hasPetsAllowed(accommodation: any): boolean {
      return accommodation.amenities.some((amenity: any) => amenity.name.it === 'Animali domestici permessi');
  }

  hasPrivatePool(accommodation: any): boolean {
      return accommodation.amenities.some((amenity: any) => amenity.name.it === 'Piscina privata');
  }

  hasTV(accommodation: any): boolean {
      return accommodation.amenities.some((amenity: any) => amenity.name.it === 'TV');
  }

  hasGarage(accommodation: any): boolean {
      return accommodation.amenities.some((amenity: any) => amenity.name.it === 'Garage');
  }



}
