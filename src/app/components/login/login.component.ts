import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router) { }

  onSubmit(myForm:NgForm){
    if (myForm.value.username === 'admin' && myForm.value.password === '123') {

      this.router.navigate(['/home', myForm.value.username]);
      
    } else {
      alert('Usuário ou senha inválido.');
    }
  }
}
