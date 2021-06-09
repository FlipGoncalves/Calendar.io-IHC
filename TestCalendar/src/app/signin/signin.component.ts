import { ActivatedRoute } from '@angular/router';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public request = {}

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  email: string = "";
  password: string = "";

  clickme() {
    this.request = { email: this.email, password: this.password };
    this.cartService.checkLogin(this.request);
    this.cartService.getDisplayUser();
  }

}
