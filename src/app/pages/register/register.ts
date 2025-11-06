import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router'
import { FormsModule, NgForm } from '@angular/forms'
import { Spinner } from '../../spinner/spinner';
import { UsersService } from '../../services/UserService';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule,Spinner],
  
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  errorRegister = false;
  usersService=inject(UsersService);
  isLoading=false;
  router=inject(Router)

  
   async register(form: NgForm){
    this.errorRegister = false; 
    if(!form.value.email || 
      !form.value.password || 
      !form.value.password2 || 
      !form.value.firstName ||
      !form.value.lastName ||
      form.value.password !== form.value.password2){
      this.errorRegister = true;
      return
    }
    this.isLoading = true;
    const res = await this.usersService.register(form.value);
    if(res.ok){
      this.router.navigate(["/login"])
    }
    this.isLoading = false;
    this.errorRegister = true;
  }
}
