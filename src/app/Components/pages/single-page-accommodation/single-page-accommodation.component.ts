import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccommodationService } from '../../services/accommodation.service';

@Component({
  selector: 'app-single-page-accommodation',
  templateUrl: './single-page-accommodation.component.html',
  styleUrls: ['./single-page-accommodation.component.css']
})
export class SinglePageAccommodationComponent {
  
  constructor(private accommodationService: AccommodationService, private route: ActivatedRoute){}

  ngOnInit(): void {
    
  }

}
