import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/pages/about-us/about-us.component';
import { AccomodationsComponent } from './Components/pages/accomodations/accomodations.component';
import { ContactsComponent } from './Components/pages/contacts/contacts.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { LocationsComponent } from './Components/pages/locations/locations.component';
import { PropertiesSuggestionComponent } from './Components/pages/properties-suggestion/properties-suggestion.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ville-appartamenti-vacanze-sardegna', component: AccomodationsComponent},
  {path: 'localita-spiagge-sardegna', component: LocationsComponent},
  {path: 'proponi-immobile', component: PropertiesSuggestionComponent},
  {path: 'chisiamo', component: AboutUsComponent},
  {path: 'contatti', component: ContactsComponent},
  {path: 'en', component: HomeComponent},
  {path: 'en/villas-accommodations-holiday-sardinia', component: AccomodationsComponent},
  {path: 'en/locations-beaches-sardinia', component: LocationsComponent},
  {path: 'en/property-suggestion', component: PropertiesSuggestionComponent},
  {path: 'en/about-us', component: AboutUsComponent},
  {path: 'en/contact-us', component: ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
