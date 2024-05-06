import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Accommodation } from '../../models/accommodation';
import { AccommodationService } from '../../services/accommodation.service';
import { Title, Meta } from '@angular/platform-browser';
import { HousecardsComponent } from '../../layouts/housecards/housecards.component';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker, MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { CommonModule, DatePipe } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SearchService } from '../../services/search.service';
import { SeoService } from '../../services/seo.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { NgcCookieConsentService } from 'ngx-cookieconsent';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, HousecardsComponent, TranslateModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, CarouselModule, CommonModule, FontAwesomeModule]
})
export class HomeComponent {
  faStar = faStar;
  form!: FormGroup;
  public allAccommodations?: Accommodation[];
  @ViewChild('checkOutPicker') checkoutPicker!: MatDatepicker<Date>;



  constructor(private cookieService: NgcCookieConsentService,private formBuilder: FormBuilder, private accommodationService: AccommodationService, private titleService: Title, private metaTagService: Meta, private translate: TranslateService, private datePipe: DatePipe, private dateAdapter: DateAdapter<Date>, private router: Router, private searchService: SearchService, private seo: SeoService) {
    this.dateAdapter.setLocale('it');
    this.dateAdapter.getFirstDayOfWeek = () => { return 1; }
  }

  ngOnInit() {

    let message = this.translate.instant("message");
    let dismiss = this.translate.instant("dismiss");
    let deny = this.translate.instant("deny");
    let link = this.translate.instant("link");
    let policy = this.translate.instant("policy");
    let href = this.translate.instant("rl.privacy");

    this.cookieService.getConfig().content!.message = message;
    this.cookieService.getConfig().content!.dismiss = dismiss;
    this.cookieService.getConfig().content!.deny = deny;
    this.cookieService.getConfig().content!.link = link;
    this.cookieService.getConfig().content!.policy = policy;
    this.cookieService.getConfig().content!.href = href;

    this.cookieService.destroy(); // remove previous cookie bar (with default messages)
        this.cookieService.init(this.cookieService.getConfig());

    let translatedTitle = this.translate.instant('homeMetaTitle');
    let translatedDescription = this.translate.instant('homeMetaDescription');
    this.seo.updateTitle(translatedTitle);
    this.seo.updateDescription(translatedDescription);

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

  onCheckInDateChange(event: MatDatepickerInputEvent<Date>) {
    const checkInDate = event.value;
    if (checkInDate) {
      const checkOutDate = new Date(checkInDate);
      checkOutDate.setDate(checkOutDate.getDate() + 7);
      this.form.get('checkOut')?.setValue(checkOutDate);
      this.form.get('checkOut')?.updateValueAndValidity();
    }
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
