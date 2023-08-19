import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccommodationService } from '../../services/accommodation.service';
import { Accommodation } from '../../models/accommodation';

@Component({
  selector: 'app-single-page-accommodation',
  templateUrl: './single-page-accommodation.component.html',
  styleUrls: ['./single-page-accommodation.component.css']
})
export class SinglePageAccommodationComponent {
  accommodation: Accommodation | undefined;

  constructor(
    private accommodationService: AccommodationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const accommodationUrl = params['accommodationUrl'];
      if (accommodationUrl) {
        this.accommodationService
          .getAccommodationByMetaUrlIta(accommodationUrl)
          .subscribe(accommodation => {
            this.accommodation = accommodation;
            console.log(this.accommodation);
          });
      }
    });
  }
}
