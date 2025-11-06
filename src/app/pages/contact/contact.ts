import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { ContactsService } from '../../services/contact-service';
import { ContactListItem } from "../../contact-list-item/contact-list-item";

@Component({
  selector: 'app-contact',
  imports: [RouterModule, FormsModule, ContactListItem],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactsPage implements OnInit {
  ngOnInit(): void {
    this.contactsService.getContacts();
  }

  authService = inject(AuthService);
  contactsService = inject(ContactsService);

}