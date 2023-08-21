import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccommodationService } from '../../services/accommodation.service';
import { Accommodation } from '../../models/accommodation';
import { faBathtub, faBed, faWifi, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-single-page-accommodation',
  templateUrl: './single-page-accommodation.component.html',
  styleUrls: ['./single-page-accommodation.component.css']
})
export class SinglePageAccommodationComponent {
  accommodation: Accommodation | undefined;
  faBathtub = faBathtub;
  faBed = faBed;
  faWifi = faWifi;
  faLocationDot = faLocationDot;

  constructor(
    private accommodationService: AccommodationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const accommodationUrl = params['accommodationUrl'];
      if (accommodationUrl) {
        this.accommodationService
          .getAccommodationByMetaUrl('/'+accommodationUrl)
          .subscribe(accommodation => {
            this.accommodation = accommodation;
            console.log(this.accommodation);
          });
      }
    });
  }
}
