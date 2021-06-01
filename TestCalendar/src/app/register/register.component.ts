import { CartService } from './../cart.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  User: any = ['Professor', 'Student'];

  public request = {}

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  email: string = "";
  password: string = "";

  clickme() {
    this.request = { email: this.email, password: this.password };
    this.cartService.registerUser(this.request);
  }


}