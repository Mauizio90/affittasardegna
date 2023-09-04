import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgbCollapse, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from '../../services/local-storage-service.service';
import { LocationService } from '../../services/location-service.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [RouterLink, NgbCollapse, NgClass, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu]
})
export class HeaderComponent implements OnInit {

  isCollapsed = true;
  languageIcon?: string;

  constructor(private localStorageService: LocalStorageService , private locationService: LocationService) { }

  ngOnInit() {
    const currentLanguage = this.localStorageService.getItem('currentLanguage');
    this.changeLanguage(currentLanguage || 'en', false);
    // ...
  }

  changeLanguage(language: string, reload: boolean) {
    this.localStorageService.setItem('currentLanguage', language);
  
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
