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

  ngOnInit(): void {
  }

  onclick(course: string): void {
    this.cartService.setCourse(course)
  }

  /*
  routerLink(cadeira: string, grupo: string){
    return cadeira + " " + grupo;
  }*/

}
