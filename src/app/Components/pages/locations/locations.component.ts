import { Component } from '@angular/core';
import { AccommodationService } from '../../services/accommodation.service';
import { Accommodation } from '../../models/accommodation';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  public allAccommodations?: Accommodation[];
  public selectableCities: { name: string, accommodationsCount: number, descriptionIta: string, descriptionEng: string }[] = [
    { name: 'Aglientu', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Alghero', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Badesi', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Baja Sardinia', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Bosa', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Budoni', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Cala Gonone', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Cannigione', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Castelsardo', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Costa Paradiso', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Golfo Aranci', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Isola La Maddalena', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Lido del Sole', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Limpiddu', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Loiri Porto San Paolo', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Marina di Sorso', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Orosei', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Palau', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Pittulongu', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Porto Cervo', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Porto Istana', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Porto Rotondo', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Porto Taverna', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Porto Torres', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Portobello di Gallura', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Posada', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'San Giovanniu di Posada', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'San Teodoro', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Santa Teresa di Gallura', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Siniscola', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Stintino', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Trinità D\'agultu - Isola Rossa', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Valledoria', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
    { name: 'Viddalba', accommodationsCount: 0, descriptionIta: '', descriptionEng: '' },
];

  constructor(private accommodationService: AccommodationService, private titleService: Title, private metaTagService: Meta) {
    this.titleService.setTitle("AffittaSardegna - Le migliori località turistiche della Sardegna");
    this.metaTagService.updateTag({ name: 'description', content: 'Tutte le migliori località turistiche della Sardegna, spiagge in Sardegna, spiaggia di Stintino, spiaggia di Cala Gonone, spiaggia Costa Smeralda' });
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
