import { stringify } from '@angular/compiler/src/util';
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

  public groups: any = this.cartService.getGroups();
  public showClasses: boolean = false;

  ngOnInit(): void {
  }

  onclick(course: string): void {
    this.cartService.setCourse(course)
    this.showClasses = true;
  }

  toggle() {
    this.showClasses = false;
  }

  
  activateFiltergroups(item:any) {
    this.cartService.setFilterTrue(true,item.cadeira,item.grupo );
  }
}
