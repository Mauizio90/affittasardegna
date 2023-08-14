import { Component, Input } from '@angular/core';
import { Accommodation } from '../../models/accommodation';

@Component({
  selector: 'app-housecards',
  templateUrl: './housecards.component.html',
  styleUrls: ['./housecards.component.css']
})
export class HousecardsComponent {
  @Input() public accommodations?: Accommodation[];
  public cardsToShow: number = 40;


  constructor() { }

  public loadMoreCards(): void {
    this.cardsToShow += 40;
}


}
