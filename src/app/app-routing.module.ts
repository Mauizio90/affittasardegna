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
  {path: 'offerta-traghetti', loadChildren: () => import('./Components/pages/traghetti/traghetti.module').then(m => m.TraghettiModule)},
  {path: 'en', loadChildren: () => import('./Components/pages/home/home.module').then(m => m.HomeModule)},
  {path: 'en/villas-accommodations-holiday-sardinia', loadChildren: () => import('./Components/pages/accommodations/accommodations.module').then(m => m.AccommodationsModule)},
  {path: 'en/locations-beaches-sardinia', loadChildren: () => import('./Components/pages/locations/locations.module').then(m => m.LocationsModule)},
  {path: 'en/property-suggestion', loadChildren: () => import('./Components/pages/properties-suggestion/properties-suggestion.module').then(m => m.PropertiesSuggestionModule)},
  {path: 'en/about-us', loadChildren: () => import('./Components/pages/about-us/about-us.module').then(m => m.AboutUsModule)},
  {path: 'en/contact-us', loadChildren: () => import('./Components/pages/contacts/contacts.module').then(m => m.ContactsModule)},
  {path: 'en/terms-and-conditions', loadChildren: () => import('./Components/pages/terms/terms.module').then(m => m.TermsModule)},
  {path: 'en/privacy', loadChildren: () => import('./Components/pages/privacy/privacy.module').then(m => m.PrivacyModule)},
  {path: 'en/ferry-offer', loadChildren: () => import('./Components/pages/traghetti/traghetti.module').then(m => m.TraghettiModule)},
  {path: 'es', loadChildren: () => import('./Components/pages/home/home.module').then(m => m.HomeModule)},
  {path: 'es/casas-apartamentos-vacaciones-cerdeña', loadChildren: () => import('./Components/pages/accommodations/accommodations.module').then(m => m.AccommodationsModule)},
  {path: 'es/lugares-playas-cerdeña', loadChildren: () => import('./Components/pages/locations/locations.module').then(m => m.LocationsModule)},
  {path: 'es/propon-tu-inmueble', loadChildren: () => import('./Components/pages/properties-suggestion/properties-suggestion.module').then(m => m.PropertiesSuggestionModule)},
  {path: 'es/quienes-somos', loadChildren: () => import('./Components/pages/about-us/about-us.module').then(m => m.AboutUsModule)},
  {path: 'es/contacto', loadChildren: () => import('./Components/pages/contacts/contacts.module').then(m => m.ContactsModule)},
  {path: 'es/términos-y-condiciones', loadChildren: () => import('./Components/pages/terms/terms.module').then(m => m.TermsModule)},
  {path: 'es/privacidad', loadChildren: () => import('./Components/pages/privacy/privacy.module').then(m => m.PrivacyModule)},
  {path: 'es/oferta-de-transbordadores', loadChildren: () => import('./Components/pages/traghetti/traghetti.module').then(m => m.TraghettiModule)},
  {path: 'de', loadChildren: () => import('./Components/pages/home/home.module').then(m => m.HomeModule)},
  {path: 'de/ferienhäuser-appartements-sardinien', loadChildren: () => import('./Components/pages/accommodations/accommodations.module').then(m => m.AccommodationsModule)},
  {path: 'de/orte-strände-sardinien', loadChildren: () => import('./Components/pages/locations/locations.module').then(m => m.LocationsModule)},
  {path: 'de/immobilie-anbieten', loadChildren: () => import('./Components/pages/properties-suggestion/properties-suggestion.module').then(m => m.PropertiesSuggestionModule)},
  {path: 'de/über-uns', loadChildren: () => import('./Components/pages/about-us/about-us.module').then(m => m.AboutUsModule)},
  {path: 'de/kontakt', loadChildren: () => import('./Components/pages/contacts/contacts.module').then(m => m.ContactsModule)},
  {path: 'de/geschäftsbedingungen', loadChildren: () => import('./Components/pages/terms/terms.module').then(m => m.TermsModule)},
  {path: 'de/datenschutz', loadChildren: () => import('./Components/pages/privacy/privacy.module').then(m => m.PrivacyModule)},
  {path: 'de/fährangebot', loadChildren: () => import('./Components/pages/traghetti/traghetti.module').then(m => m.TraghettiModule)},
  {path: 'fr', loadChildren: () => import('./Components/pages/home/home.module').then(m => m.HomeModule)},
  {path: 'fr/locations-maisons-appartements-sardaigne', loadChildren: () => import('./Components/pages/accommodations/accommodations.module').then(m => m.AccommodationsModule)},
  {path: 'fr/localites-plages-sardaigne', loadChildren: () => import('./Components/pages/locations/locations.module').then(m => m.LocationsModule)},
  {path: 'fr/proposer-une-propriete', loadChildren: () => import('./Components/pages/properties-suggestion/properties-suggestion.module').then(m => m.PropertiesSuggestionModule)},
  {path: 'fr/a-propos-de-nous', loadChildren: () => import('./Components/pages/about-us/about-us.module').then(m => m.AboutUsModule)},
  {path: 'fr/nous-contacter', loadChildren: () => import('./Components/pages/contacts/contacts.module').then(m => m.ContactsModule)},
  {path: 'fr/termes-et-conditions', loadChildren: () => import('./Components/pages/terms/terms.module').then(m => m.TermsModule)},
  {path: 'fr/confidentialite', loadChildren: () => import('./Components/pages/privacy/privacy.module').then(m => m.PrivacyModule)},
  {path: 'fr/offre-de-ferries', loadChildren: () => import('./Components/pages/traghetti/traghetti.module').then(m => m.TraghettiModule)},
  {path: 'puliziacache', loadChildren: () => import('./Components/pages/clear-cache/clear-cache.module').then(m => m.ClearCacheModule) },
  /* 
  {path: ':accommodationUrl', loadChildren: () => import('./Components/pages/single-page-accommodation/single-page-accommodation.module').then(m => m.SinglePageAccommodationModule)},
  {path: 'en/:accommodationUrl', loadChildren: () => import('./Components/pages/single-page-accommodation/single-page-accommodation.module').then(m => m.SinglePageAccommodationModule)},
  {path: 'es/:accommodationUrl', loadChildren: () => import('./Components/pages/single-page-accommodation/single-page-accommodation.module').then(m => m.SinglePageAccommodationModule)},
  {path: 'de/:accommodationUrl', loadChildren: () => import('./Components/pages/single-page-accommodation/single-page-accommodation.module').then(m => m.SinglePageAccommodationModule)},
  {path: 'fr/:accommodationUrl', loadChildren: () => import('./Components/pages/single-page-accommodation/single-page-accommodation.module').then(m => m.SinglePageAccommodationModule)}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

