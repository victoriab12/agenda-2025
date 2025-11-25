import { Component, inject, input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Contact } from '../interfaces/contact';
import { ContactsService } from '../services/contact-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-list-item',
  imports: [RouterModule],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss'
})
export class ContactListItem {
  contact = input.required<Contact>()
  contactId= null
  aleatorio = Math.random()
  contactsService = inject(ContactsService)

  openDeleteModal() {
    Swal.fire({
      title: "¿Desea borrar el contacto?",
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: "Cancelar",
      denyButtonText: `Eliminar definitivamente`
    }).then((result) => {
      if (result.isDenied) {
        this.contactsService.deleteContact(this.contact().id);
      }
    });
  }
}
