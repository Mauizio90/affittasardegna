import { Component, Input } from '@angular/core';
import { Accomodation } from '../../models/accomodation';
import { AccomodationsService } from '../../services/accomodations.service';

@Component({
  selector: 'app-housecards',
  templateUrl: './housecards.component.html',
  styleUrls: ['./housecards.component.css']
})
export class HousecardsComponent {
  @Input() public accomodations?: Accomodation[];

  constructor(private accomodationsService: AccomodationsService) { }

}
