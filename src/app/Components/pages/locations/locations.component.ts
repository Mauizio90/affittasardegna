import { Component } from '@angular/core';
import { AccommodationService } from '../../services/accommodation.service';
import { Accommodation } from '../../models/accommodation';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  public allAccommodations?: Accommodation[];
  public selectableCities: { name: string, accommodationsCount: number }[] = [
    { name: 'Aglientu', accommodationsCount: 0 },
    { name: 'Alghero', accommodationsCount: 0 },
    { name: 'Badesi', accommodationsCount: 0 },
    { name: 'Baja Sardinia', accommodationsCount: 0 },
    { name: 'Bosa', accommodationsCount: 0 },
    { name: 'Budoni', accommodationsCount: 0 },
    { name: 'Cala Gonone', accommodationsCount: 0 },
    { name: 'Cannigione', accommodationsCount: 0 },
    { name: 'Castelsardo', accommodationsCount: 0 },
    { name: 'Costa Paradiso', accommodationsCount: 0 },
    { name: 'Golfo Aranci', accommodationsCount: 0 },
    { name: 'Isola La Maddalena', accommodationsCount: 0 },
    { name: 'Lido del Sole', accommodationsCount: 0 },
    { name: 'Limpiddu', accommodationsCount: 0 },
    { name: 'Loiri Porto San Paolo', accommodationsCount: 0 },
    { name: 'Marina di Sorso', accommodationsCount: 0 },
    { name: 'Orosei', accommodationsCount: 0 },
    { name: 'Palau', accommodationsCount: 0 },
    { name: 'Pittulongu', accommodationsCount: 0 },
    { name: 'Porto Cervo', accommodationsCount: 0 },
    { name: 'Porto Istana', accommodationsCount: 0 },
    { name: 'Porto Rotondo', accommodationsCount: 0 },
    { name: 'Porto Taverna', accommodationsCount: 0 },
    { name: 'Porto Torres', accommodationsCount: 0 },
    { name: 'Portobello di Gallura', accommodationsCount: 0 },
    { name: 'Posada', accommodationsCount: 0 },
    { name: 'San Giovanniu di Posada', accommodationsCount: 0 },
    { name: 'San Teodoro', accommodationsCount: 0 },
    { name: 'Santa Teresa di Gallura', accommodationsCount: 0 },
    { name: 'Siniscola', accommodationsCount: 0 },
    { name: 'Stintino', accommodationsCount: 0 },
    { name: 'Trinità D\'agultu - Isola Rossa', accommodationsCount: 0 },
    { name: 'Valledoria', accommodationsCount: 0 },
    { name: 'Viddalba', accommodationsCount: 0 },
  ];

  constructor(private accommodationService: AccommodationService) {
    this.accommodationService.getAccommodations().subscribe((data) => {
      this.allAccommodations = data;
      this.updateAccommodationsCount();      
    });
  }

  updateAccommodationsCount() {
    this.selectableCities.forEach((city) => {
      city.accommodationsCount = this.allAccommodations?.filter((accommodation) => accommodation.city === city.name).length || 0;
    });
  }

}
