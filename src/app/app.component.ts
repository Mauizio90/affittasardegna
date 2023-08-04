import { Component } from '@angular/core';
import { Accomodation } from './Components/models/accomodation';
import { AccomodationsService } from './Components/services/accomodations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'affittasardegna';
  public allAccomodations?: Accomodation[];

  constructor(private accomodationsService: AccomodationsService) { }

  ngOnInit(): void {
    this.accomodationsService.getAccomodations().subscribe((data: Accomodation[]) => {
    this.allAccomodations = data;
    console.log(this.allAccomodations);
      }
    )
    
  }
}
