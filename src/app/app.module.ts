import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/layouts/footer/footer.component';
import { HeaderComponent } from './Components/layouts/header/header.component';
import { HousecardsComponent } from './Components/layouts/housecards/housecards.component';
import { AboutUsComponent } from './Components/pages/about-us/about-us.component';
import { AccomodationsComponent } from './Components/pages/accomodations/accomodations.component';
import { ContactsComponent } from './Components/pages/contacts/contacts.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { LocationsComponent } from './Components/pages/locations/locations.component';
import { PrivacyComponent } from './Components/pages/privacy/privacy.component';
import { PropertiesSuggestionComponent } from './Components/pages/properties-suggestion/properties-suggestion.component';
import { TermsComponent } from './Components/pages/terms/terms.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HousecardsComponent,
    AboutUsComponent,
    AccomodationsComponent,
    ContactsComponent,
    HomeComponent,
    LocationsComponent,
    PrivacyComponent,
    PropertiesSuggestionComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
