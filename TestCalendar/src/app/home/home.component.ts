import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  public filteractivated: any = this.cartService.groupFilter;
  public cadeiras: any = this.cartService.filter_group;

  cadeira: string="";
  practical: string="";

  ngOnInit(): void {
  }

  search() {
    alert(this.cadeira);
    alert(this.practical);
  }

}
