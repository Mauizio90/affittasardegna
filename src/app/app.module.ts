import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/layouts/footer/footer.component';
import { HeaderComponent } from './Components/layouts/header/header.component';
import { HousecardsComponent } from './Components/layouts/housecards/housecards.component';
import { AboutUsComponent } from './Components/pages/about-us/about-us.component';
import { ContactsComponent } from './Components/pages/contacts/contacts.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { LocationsComponent } from './Components/pages/locations/locations.component';
import { PrivacyComponent } from './Components/pages/privacy/privacy.component';
import { PropertiesSuggestionComponent } from './Components/pages/properties-suggestion/properties-suggestion.component';
import { TermsComponent } from './Components/pages/terms/terms.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccommodationsComponent } from './Components/pages/accommodations/accommodations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupsubmissionsuccessComponent } from './Components/layouts/popupsubmissionsuccess/popupsubmissionsuccess.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SinglePageAccommodationComponent } from './Components/pages/single-page-accommodation/single-page-accommodation.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { en } from 'src/assets/i18n/en';
import { it } from 'src/assets/i18n/it';
import { es } from 'src/assets/i18n/es';
import { de } from 'src/assets/i18n/de';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { fr } from 'src/assets/i18n/fr';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { ClearCacheComponent } from './Components/pages/clear-cache/clear-cache.component';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';

const cookieConfig:NgcCookieConsentConfig = {
  "cookie": {
    "domain": "www.affittasardegna.it"
  },
  "position": "bottom",
  "theme": "classic",
  "palette": {
    "popup": {
      "background": "#2a3f80",
      "text": "#ffffff",
      "link": "#ffffff"
    },
    "button": {
      "background": "#f1d600",
      "text": "#2a3f80",
      "border": "transparent"
    }
  },
  "type": "info",
  "content": {
    "message": "This website uses cookies to ensure you get the best experience on our website.",
    "dismiss": "Got it!",
    "deny": "Refuse cookies",
    "link": "Learn more",
    "href": "/privacy",
    "policy": "Cookie Policy"
  }
};

export class CustomTranslateLoader implements TranslateLoader {
  
  public getTranslation(lang: string) {
    let translationFile = it;
    if (typeof window !== 'undefined' && window.location.pathname.includes('/en')) {
      translationFile = en;
    }
    else if (typeof window !== 'undefined' && window.location.pathname.includes('/es')) {
      translationFile = es;
    }
    else if (typeof window !== 'undefined' && window.location.pathname.includes('/de')) {
      translationFile = de;
    }
    else if (typeof window !== 'undefined' && window.location.pathname.includes('/fr')) {
      translationFile = fr;
    }
    
    return of(translationFile);
  }
}

@Injectable()
export class MyDateAdapter extends NativeDateAdapter {

  override getFirstDayOfWeek(): number {
    return 1;
  }

}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        FontAwesomeModule,
        FooterComponent,
        HeaderComponent,
        HousecardsComponent,
        AboutUsComponent,
        AccommodationsComponent,
        ContactsComponent,
        HomeComponent,
        LocationsComponent,
        PrivacyComponent,
        PropertiesSuggestionComponent,
        TermsComponent,
        AccommodationsComponent,
        PopupsubmissionsuccessComponent,
        SinglePageAccommodationComponent,
        ClearCacheComponent,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: CustomTranslateLoader,
                deps: [HttpClient]
            }
        }),
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        NgxGoogleAnalyticsModule.forRoot('G-7XJBP872BN'),
        NgxGoogleAnalyticsRouterModule,
        NgcCookieConsentModule.forRoot(cookieConfig),
    ],
    providers: [provideClientHydration(),DatePipe,
      {provide: DateAdapter, useClass: MyDateAdapter}],
    bootstrap: [AppComponent]
})
export class AppModule { }
