import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
  }

  public filteractivated: any = this.cartService.groupFilter;

  getfilteractivated () {
    let filteractivated: any = this.cartService.groupFilter;
    return filteractivated.cadeira + " " + filteractivated.grupo;
  }

}
