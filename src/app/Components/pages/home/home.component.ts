import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Accommodation } from '../../models/accommodation';
import { AccommodationService } from '../../services/accommodation.service';
import { Title, Meta } from '@angular/platform-browser';
import { HousecardsComponent } from '../../layouts/housecards/housecards.component';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { CommonModule, DatePipe } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, HousecardsComponent, TranslateModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, CarouselModule, CommonModule]
})
export class HomeComponent {
  form!: FormGroup;
  public allAccommodations?: Accommodation[];

  constructor(private formBuilder: FormBuilder, private accommodationService: AccommodationService, private titleService: Title, private metaTagService: Meta, private translate: TranslateService, private datePipe: DatePipe, private dateAdapter: DateAdapter<Date>, private router: Router, private searchService: SearchService) {
    this.dateAdapter.setLocale('it');
    this.dateAdapter.getFirstDayOfWeek = () => { return 1; }
  }

  ngOnInit() {
    this.translate.get('homeMetaTitle').subscribe((title: string) => {
      this.translate.get('homeMetaDescription').subscribe((description: string) => {
        this.metaTagService.addTags([
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
          { property: 'description', content: description },
          { property: 'og:image', content: './assets/images/logo.png' },
        ]);
        this.titleService.setTitle(title);
      });
    });

    this.form = this.formBuilder.group({
      checkIn: [this.getFormattedDate(new Date()), Validators.required],
      checkOut: [this.getFormattedDate(this.getFutureDate(7)), Validators.required],
      guests: ['1', Validators.required]
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

    const formattedCheckInDate = this.datePipe.transform(checkInDate, 'yyyy-MM-dd');
    const formattedCheckOutDate = this.datePipe.transform(checkOutDate, 'yyyy-MM-dd');

    const url = `https://affittasardegna.kross.travel/book/step1?adults=${guests}&children=0&rooms=1&guests=${guests}&n_guests=${guests}&guests_rooms=${guests},0;&kross_lang=it&from=${formattedCheckInDate}&to=${formattedCheckOutDate}`;
    console.log(formattedCheckInDate, formattedCheckOutDate, guests);

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


  onSearchClick() {
    const searchInput = (document.getElementById('nameInput') as HTMLInputElement).value;
    this.searchService.changeSearch(searchInput);
    const translatedPath = this.translate.instant('rl.gliAlloggi');
    this.router.navigate(['/' + translatedPath]);
  }

}
