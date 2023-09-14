import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgbCollapse, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from '../../services/local-storage-service.service';
import { LocationService } from '../../services/location-service.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [RouterLink, NgbCollapse, NgClass, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, TranslateModule]
})
export class HeaderComponent implements OnInit {

  isCollapsed = true;
  languageIcon?: string;
  private router?: Router

  constructor(private localStorageService: LocalStorageService , private locationService: LocationService, private translate: TranslateService) {
    this.translate.setDefaultLang('it')
    this.translate.use('it')
    const currentUrl = this.router?.url;
    if (currentUrl === '/en' || currentUrl?.startsWith('/en/')) {
      this.changeLanguage('en', false);
    }
  }

  ngOnInit() {
    const currentLanguage = this.localStorageService.getItem('currentLanguage');
    this.changeLanguage(currentLanguage || 'it', false);
  }

  changeLanguage(language: string, reload: boolean) {
    this.localStorageService.setItem('currentLanguage', language);
    this.translate.use(language)
  
    if (language === 'it') {
      this.languageIcon = 'assets/images/flags/it.png';
    } else if (language === 'en') {
      this.languageIcon = 'assets/images/flags/en.png';
    }
  
    if(reload) {
      this.locationService.reload();
    }
  }
}
