import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestCalendar';
  constructor(  
    private cartService: CartService,
    private Course: CoursesComponent
  ) { }

  desactivateFilter() {
    this.cartService.setFilterGroupFalse();
    this.cartService.setFilterSubGroupFalse();
  }

  public nome: string = this.cartService.getDisplayUser();


}

