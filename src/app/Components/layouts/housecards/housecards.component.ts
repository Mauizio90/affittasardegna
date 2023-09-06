import { Component, Input } from '@angular/core';
import { Accommodation } from '../../models/accommodation';
import { faBathtub, faBed, faWifi, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor, SlicePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-housecards',
    templateUrl: './housecards.component.html',
    styleUrls: ['./housecards.component.css'],
    standalone: true,
    imports: [NgFor, FontAwesomeModule, SlicePipe, CommonModule]
})
export class HousecardsComponent {
  faBathtub = faBathtub;
  faBed = faBed;
  faWifi = faWifi;
  faLocationDot = faLocationDot;
  @Input() public accommodations?: Accommodation[];
  public cardsToShow: number = 40;


  constructor() { }

  public loadMoreCards(): void {
    this.cardsToShow += 40;
  }


  hasWifi(accommodation: any): boolean {
    return accommodation.amenities.some((amenity: any) => amenity.name.it === 'connessione wifi');
  }



}
