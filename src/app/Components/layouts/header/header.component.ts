import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgbCollapse, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';


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

  constructor(private router: Router) { }

  ngOnInit() {
    // Set the initial language icon based on the stored currentLanguage in localStorage
    const currentLanguage = localStorage.getItem('currentLanguage');
    this.changeLanguage(currentLanguage || 'en', false);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  changeLanguage(language: string, reload: boolean) {
    localStorage.setItem('currentLanguage', language);

    if (language === 'it') {
      this.languageIcon = 'assets/images/flags/it.png';
    } else if (language === 'en') {
      this.languageIcon = 'assets/images/flags/en.png';
    }

    if (reload) {
      location.reload();
    }
  }
}
