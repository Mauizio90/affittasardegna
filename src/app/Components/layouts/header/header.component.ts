import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isCollapsed = true;
  languageIcon?: string; // Update the type to string for the languageIcon property

  constructor() { }

  ngOnInit() {
    // Set the initial language icon based on the stored currentLanguage in localStorage
    const currentLanguage = localStorage.getItem('currentLanguage');
    this.changeLanguage(currentLanguage || 'en', false);
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
