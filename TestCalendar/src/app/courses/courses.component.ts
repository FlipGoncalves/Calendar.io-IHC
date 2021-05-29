import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
//import {Router} from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(
    //private route:Router,
    private cartService: CartService
  ) { }

  public groups: any = this.cartService.getGroups();

  ngOnInit(): void {
  }

  onclick(course: string): void {
    this.cartService.setCourse(course)
  }

  /*
  go(item: any){
    this.route.navigate(['/', 'mycourses', item.cadeira + " " + item.grupo]);
  }*/

}
