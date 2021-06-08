import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestCalendar';
  constructor(  private cartService: CartService) { }

  desactivateFilter() {
    this.cartService.setFilterGroupFalse();
    this.cartService.setFilterSubGroupFalse();
  }


}

