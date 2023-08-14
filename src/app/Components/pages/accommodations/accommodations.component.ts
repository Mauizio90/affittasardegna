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
  public selectableCities: { name: string, selected: boolean }[] = [
    { name: 'Alghero', selected: false },
    { name: 'Aglientu', selected: false },
    { name: 'Badesi', selected: false },
    { name: 'Baja Sardinia', selected: false },
    { name: 'Bosa', selected: false },
    { name: 'Budoni', selected: false },
    { name: 'Cala Gonone', selected: false },
    { name: 'Cannigione', selected: false },
    { name: 'Castelsardo', selected: false },
    { name: 'Costa Paradiso', selected: false },
    { name: 'Golfo Aranci', selected: false },
    { name: 'Isola La Maddalena', selected: false },
    { name: 'Lido del Sole', selected: false },
    { name: 'Limpiddu', selected: false },
    { name: 'Loiri Porto San Paolo', selected: false },
    { name: 'Marina di Sorso', selected: false },
    { name: 'Orosei', selected: false },
    { name: 'Palau', selected: false },
    { name: 'Pittulongu', selected: false },
    { name: 'Porto Cervo', selected: false },
    { name: 'Porto Istana', selected: false },
    { name: 'Porto Rotondo', selected: false },
    { name: 'Porto Taverna', selected: false },
    { name: 'Porto Torres', selected: false },
    { name: 'Portobello di Gallura', selected: false },
    { name: 'Posada', selected: false },
    { name: 'San Giovanniu di Posada', selected: false },
    { name: 'San Teodoro', selected: false },
    { name: 'Santa Teresa di Gallura', selected: false },
    { name: 'Siniscola', selected: false },
    { name: 'Stintino', selected: false },
    { name: 'Trinità D\'agultu - Isola Rossa', selected: false },
    { name: 'Valledoria', selected: false },
    { name: 'Viddalba', selected: false },
  ];
  
  @ViewChild('child') child?: HousecardsComponent;

  constructor(private accommodationService : AccommodationService) { }

  ngOnInit(): void {
    this.filterAccommodations();
  }

  public loadMoreCards(): void {
    this.child?.loadMoreCards();
  }

  public onChange(selectedCity: string): void {
    this.selectableCities.forEach((city) => {
      if (city.name === selectedCity) {
        city.selected = !city.selected;
      }
    });
    this.filterAccommodations();
  }

  private filterAccommodations(): void {
    if (this.selectableCities.some((city) => city.selected)) {
      this.accommodationService.getAccommodations().subscribe((accommodations) => {
        this.allAccommodations = accommodations.filter((accommodation) => {
          return this.selectableCities.some((city) => city.selected && city.name === accommodation.city);
        });
      });
    } else {
      this.accommodationService.getAccommodations().subscribe((accommodations) => {
        this.allAccommodations = accommodations;
      });
    }
    console.log(this.allAccommodations);
    
  } 
}
