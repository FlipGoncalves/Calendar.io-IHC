import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(  private cartService: CartService) { }

  ngOnInit(): void {
  }

  desactivateFiltergroups() {
    alert("Filtro desativado")
    this.cartService.setFilterFalse(false);
  }

}
