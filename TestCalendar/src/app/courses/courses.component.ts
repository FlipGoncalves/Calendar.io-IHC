import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  public showClasses: boolean = false;
  onclick(course: string): void {
    this.cartService.setCourse(course)
    this.showClasses = true;
  }

  toggle() {
    this.showClasses = false;
  }

  public ngOnInit() {
  }
}
