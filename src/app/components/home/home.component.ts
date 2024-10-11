import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nome:string;

  constructor(private router: ActivatedRoute) {
    this.nome = this.router.snapshot.params['nome'];
  }
}
