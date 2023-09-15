import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-popupsubmissionsuccess',
    templateUrl: './popupsubmissionsuccess.component.html',
    styleUrls: ['./popupsubmissionsuccess.component.css'],
    standalone: true,
    imports: [TranslateModule]
})
export class PopupsubmissionsuccessComponent {
    constructor(private translate: TranslateService){

    }

}
