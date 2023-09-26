import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Accommodation } from '../../models/accommodation';
import { AccommodationService } from '../../services/accommodation.service';
import { Title, Meta } from '@angular/platform-browser';
import { HousecardsComponent } from '../../layouts/housecards/housecards.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule, HousecardsComponent, TranslateModule]
})
export class HomeComponent {
form!: FormGroup;
public allAccommodations?: Accommodation[];

  constructor(private formBuilder: FormBuilder, private accommodationService : AccommodationService, private titleService: Title, private metaTagService: Meta, private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('homeMetaTitle').subscribe((str: string) => {
      this.titleService.setTitle(str);
    });
    this.translate.get('homeMetaDescription').subscribe((str: string) => {
      this.metaTagService.updateTag({ name: 'description', content: str });
    });
    this.form = this.formBuilder.group({
      checkIn: [this.getFormattedDate(new Date()),Validators.required],
      checkOut: [this.getFormattedDate(this.getFutureDate(7)),Validators.required],
      guests: ['1',Validators.required]
    });

    this.accommodationService.getAccommodations().subscribe((accommodations) => {
      this.allAccommodations = accommodations.filter((accommodation) => {
        const amenities = accommodation.amenities || [];
        return amenities.some((amenity) => amenity.name.it === 'in evidenza');
      });
    });
    
  }

  onFormSubmit() {
    const checkInDate = this.form.get('checkIn')?.value;
    const checkOutDate = this.form.get('checkOut')?.value;
    const guests = this.form.get('guests')?.value;
    const url = `https://affittasardegna.kross.travel/book/step1?adults=${guests}&children=0&rooms=1&guests=${guests}&n_guests=${guests}&guests_rooms=${guests},0;&kross_lang=it&from=${checkInDate}&to=${checkOutDate}`;
    console.log(checkInDate, checkOutDate, guests);

    window.location.href = url;
    
  }

  getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getFutureDate(days: number): Date {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);
    return futureDate;
  }
  
}
