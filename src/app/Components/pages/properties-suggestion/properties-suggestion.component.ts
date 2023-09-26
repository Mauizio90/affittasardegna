import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { PopupsubmissionsuccessComponent } from '../../layouts/popupsubmissionsuccess/popupsubmissionsuccess.component';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-properties-suggestion',
    templateUrl: './properties-suggestion.component.html',
    styleUrls: ['./properties-suggestion.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, RouterLink, TranslateModule, CommonModule]
})
export class PropertiesSuggestionComponent {

  suggestForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog, private titleService: Title, private metaTagService: Meta, private translate: TranslateService) {
    this.translate.get('propertySuggestionMetaTitle').subscribe((str: string) => {
      this.titleService.setTitle(str);
    });
    this.translate.get('propertySuggestionMetaDescription').subscribe((str: string) => {
      this.metaTagService.updateTag({ name: 'description', content: str });
    });
    
    this.suggestForm = this.formBuilder.group({
      city: ['', Validators.required],
      address: ['', Validators.required],
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      privacy: [false, Validators.requiredTrue],
      trattamentodati: [false, Validators.requiredTrue]
    });
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    
    emailjs.sendForm('service_8cbpqsx', 'template_8t274fm', e.target as HTMLFormElement, 'ctEey7TyrNy4Yq2B9')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    
    this.submitted = true;
    this.openPopup();
  }

  openPopup() {
    const dialogRef = this.dialog.open(PopupsubmissionsuccessComponent, {
      width: '400px',
      height: '150px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
