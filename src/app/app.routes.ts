import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { LoggedLayout } from './pages/logged-layout/logged-layout';
import { ContactsPage } from './pages/contact/contact';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { onlyPublicUserGuard } from './guards/only-public-user-guard';
import { onlyLoggedUserGuard } from './guards/only-logged-user-guard';
import { Grupos } from './pages/grupos/grupos';
import { NewEditContact } from './pages/new-edit-contact/new-edit-contact';

export const routes: Routes = [
  {
    path: "login",
    component: Login,
    canActivate: [onlyPublicUserGuard]
  },
  {
    path: "register",
    component: Register,
    canActivate: [onlyPublicUserGuard]
  },
  {
    path: "",
    component: LoggedLayout,
    canActivateChild: [onlyLoggedUserGuard],
    children: [
      {
        path: "",
        component: ContactsPage
      },{
        path: "contacts/new",
        component: NewEditContact
      },
      {
        path: "contacts/:id",
        component: ContactDetailsPage
      },
      {
        path: "contacts/:idContacto/edit",
        component: NewEditContact
      },
      {
        path: "groups",
        component: Grupos
      },
    ]
  },

];