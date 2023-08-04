import { Component, Input } from '@angular/core';
import { Accommodation } from '../../models/accommodation';
import { AccommodationService } from '../../services/accommodation.service';

@Component({
  selector: 'app-housecards',
  templateUrl: './housecards.component.html',
  styleUrls: ['./housecards.component.css']
})
export class HousecardsComponent {
  @Input() public accommodations?: Accommodation[];

  constructor(private accommodationService: AccommodationService) { }

}
