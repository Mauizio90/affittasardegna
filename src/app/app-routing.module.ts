import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/pages/about-us/about-us.component';
import { AccommodationsComponent } from './Components/pages/accommodations/accommodations.component';
import { ContactsComponent } from './Components/pages/contacts/contacts.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { LocationsComponent } from './Components/pages/locations/locations.component';
import { PropertiesSuggestionComponent } from './Components/pages/properties-suggestion/properties-suggestion.component';
import { TermsComponent } from './Components/pages/terms/terms.component';
import { PrivacyComponent } from './Components/pages/privacy/privacy.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ville-appartamenti-vacanze-sardegna', component: AccommodationsComponent},
  {path: 'localita-spiagge-sardegna', component: LocationsComponent},
  {path: 'proponi-immobile', component: PropertiesSuggestionComponent},
  {path: 'chisiamo', component: AboutUsComponent},
  {path: 'contatti', component: ContactsComponent},
  {path: 'termini-e-condizioni', component: TermsComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'en', component: HomeComponent},
  {path: 'en/villas-accommodations-holiday-sardinia', component: AccommodationsComponent},
  {path: 'en/locations-beaches-sardinia', component: LocationsComponent},
  {path: 'en/property-suggestion', component: PropertiesSuggestionComponent},
  {path: 'en/about-us', component: AboutUsComponent},
  {path: 'en/contact-us', component: ContactsComponent},
  {path: 'en/terms-and-conditions', component: TermsComponent},
  {path: 'en/privacy', component: PrivacyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
