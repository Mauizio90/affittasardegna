import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true,
    imports: [RouterLink, TranslateModule]
})
export class FooterComponent {

  constructor(private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
        }
      });
    }
  }
  
}
