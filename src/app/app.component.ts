import { Component } from '@angular/core';
import { Accommodation } from './Components/models/accommodation';
import { AccommodationService } from './Components/services/accommodation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'affittasardegna';
  public allAccommodations?: Accommodation[];
  public accommodationsByAlghero?: Accommodation[];

  constructor(private accommodationService : AccommodationService) { }

  ngOnInit(): void {
    this.accommodationService.getAccommodations().subscribe((data: Accommodation[]) => {
    this.allAccommodations = data;
    this.accommodationsByAlghero = data.filter((accommodation) => accommodation.city === 'Alghero');
    console.log(this.accommodationsByAlghero);
      }
    )
    
  }
}
