import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { PopupsubmissionsuccessComponent } from '../../layouts/popupsubmissionsuccess/popupsubmissionsuccess.component';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog, private titleService: Title, private metaTagService: Meta) {
    this.titleService.setTitle("AffittaSardegna - Contattaci per ricevere informazioni, Tel. +39 3494787272, E-mail: info@affittasardegna.it");
    this.metaTagService.updateTag({ name: 'description', content: 'Contattaci e richiedi informazioni sulla tua vacanza, chiamaci al Tel. +39 3494787272 oppure scrivici all\'indirizzo info@affittasardegna.it' });
    
    this.contactForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      messaggio: ['', Validators.required],
      privacy: [false, Validators.requiredTrue],
      trattamentodati: [false, Validators.requiredTrue]
    });
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    
    emailjs.sendForm('service_8cbpqsx', 'template_8alzjs5', e.target as HTMLFormElement, 'ctEey7TyrNy4Yq2B9')
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
