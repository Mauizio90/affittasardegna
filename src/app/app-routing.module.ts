import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./Components/pages/home/home.module').then(m => m.HomeModule)},
  {path: 'ville-appartamenti-vacanze-sardegna', loadChildren: () => import('./Components/pages/accommodations/accommodations.module').then(m => m.AccommodationsModule)},
  {path: 'localita-spiagge-sardegna', loadChildren: () => import('./Components/pages/locations/locations.module').then(m => m.LocationsModule)},
  {path: 'proponi-immobile', loadChildren: () => import('./Components/pages/properties-suggestion/properties-suggestion.module').then(m => m.PropertiesSuggestionModule)},
  {path: 'chisiamo', loadChildren: () => import('./Components/pages/about-us/about-us.module').then(m => m.AboutUsModule)},
  {path: 'contatti', loadChildren: () => import('./Components/pages/contacts/contacts.module').then(m => m.ContactsModule)},
  {path: 'termini-e-condizioni', loadChildren: () => import('./Components/pages/terms/terms.module').then(m => m.TermsModule)},
  {path: 'privacy', loadChildren: () => import('./Components/pages/privacy/privacy.module').then(m => m.PrivacyModule)},
  {path: 'en', loadChildren: () => import('./Components/pages/home/home.module').then(m => m.HomeModule)},
  {path: 'en/villas-accommodations-holiday-sardinia', loadChildren: () => import('./Components/pages/accommodations/accommodations.module').then(m => m.AccommodationsModule)},
  {path: 'en/locations-beaches-sardinia', loadChildren: () => import('./Components/pages/locations/locations.module').then(m => m.LocationsModule)},
  {path: 'en/property-suggestion', loadChildren: () => import('./Components/pages/properties-suggestion/properties-suggestion.module').then(m => m.PropertiesSuggestionModule)},
  {path: 'en/about-us', loadChildren: () => import('./Components/pages/about-us/about-us.module').then(m => m.AboutUsModule)},
  {path: 'en/contact-us', loadChildren: () => import('./Components/pages/contacts/contacts.module').then(m => m.ContactsModule)},
  {path: 'en/terms-and-conditions', loadChildren: () => import('./Components/pages/terms/terms.module').then(m => m.TermsModule)},
  {path: 'en/privacy', loadChildren: () => import('./Components/pages/privacy/privacy.module').then(m => m.PrivacyModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
