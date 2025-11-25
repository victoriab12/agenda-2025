import { Component, inject, input, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contact-service';
import { Contact } from '../../interfaces/contact';
import {  Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-details-page',
  imports: [RouterModule],
  templateUrl: './contact-details-page.html',
  styleUrl: './contact-details-page.scss'
})
export class ContactDetailsPage implements OnInit {
  idContacto = input.required<string>();
  readonly contactservice = inject(ContactsService);
  contacto: Contact | undefined;
  cargandoContacto = false;
  router = inject(Router);

  async ngOnInit() {

    this.contacto = await this.contactservice.getContactById(this.idContacto())
    }
  

  async toggleFavorite(){
    if(this.contacto){
      const res = await this.contactservice.setFavourite(this.contacto.id);
      if(res) this.contacto.isFavorite = !this.contacto.isFavorite;
    }
  }

  async deleteContact(){
    if(this.contacto){
      const res = await this.contactservice.deleteContact(this.contacto.id);
      if(res) this.router.navigate(['/']);
    }
  }
}
