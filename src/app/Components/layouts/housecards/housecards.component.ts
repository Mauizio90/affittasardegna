import { Component, Input } from '@angular/core';
import { Accommodation } from '../../models/accommodation';
import { faBathtub, faBed, faWifi, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-housecards',
  templateUrl: './housecards.component.html',
  styleUrls: ['./housecards.component.css']
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


}
