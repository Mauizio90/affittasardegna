import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { PopupsubmissionsuccessComponent } from '../../layouts/popupsubmissionsuccess/popupsubmissionsuccess.component';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-properties-suggestion',
  templateUrl: './properties-suggestion.component.html',
  styleUrls: ['./properties-suggestion.component.css']
})
export class PropertiesSuggestionComponent {

  suggestForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog, private titleService: Title, private metaTagService: Meta) {
    this.titleService.setTitle("AffittaSardegna - Proponi il tuo immobile in Sardegna e guadagna con gli affitti");
    this.metaTagService.updateTag({ name: 'description', content: 'Ricava dagli affitti del tuo immobile in Sardegna, commissione bassa, massimo rendimento' });
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
