import { Component, Input, ViewChild } from '@angular/core';
import { AccommodationService } from '../../services/accommodation.service';
import { Accommodation } from '../../models/accommodation';
import { HousecardsComponent } from '../../layouts/housecards/housecards.component';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent {
  public allAccommodations?: Accommodation[];
  public accommodationsByAlghero?: Accommodation[];
  @ViewChild('child') child?: HousecardsComponent;


  constructor(private accommodationService : AccommodationService) { }

  ngOnInit(): void {
    this.accommodationService.getAccommodations().subscribe((data: Accommodation[]) => {
    this.allAccommodations = data;
    this.accommodationsByAlghero = data.filter((accommodation) => accommodation.city === 'Alghero');
    console.log(this.accommodationsByAlghero);
    })
  }

  public loadMoreCards(): void {
    this.child?.loadMoreCards();
}


}
