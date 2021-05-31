import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pds-p3',
  templateUrl: './pds-p3.component.html',
  styleUrls: ['./pds-p3.component.css']
})
export class PdsP3Component implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  setEvent(type: string) {
    this.cartService.nextEventsetType(type);
  }

}
