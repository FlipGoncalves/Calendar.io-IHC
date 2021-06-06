import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
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

  public cadeira: string = "";
  public grupo: string = "";
  public showSubgroups: boolean = false;
  public showSubcreate: boolean = false;
  public showCreateGroup: boolean = false;
  public groups: any = this.cartService.getGroups();
  public subgroups: any = this.cartService.getSubGroups();
  public showClasses: boolean = false;

  ngOnInit(): void {
  }

  onclick(course: string): void {
    this.cartService.setCourse(course)
    this.showClasses = true;
    this.showCreateGroup = true;
  }

  toggle() {
    this.showClasses = false;
    this.showSubgroups = false;
    this.showSubcreate = false;
  }
  
  activateFiltergroups(item:any) {
    this.cartService.setFilterGroupTrue(item.cadeira,item.grupo);
  }

  activateFiltersubgroups(item:any) {
    this.cartService.setSubGroupFilterTrue(item.cadeira,item.grupo, item.subgrupo);
  }

  validate(item:any, cadeira:string) {
    if (item.cadeira==cadeira) {
      return true;
    }
    return false;
  }

  subcreate() {
    this.showSubcreate = true;
    this.cartService.setCourse(this.cadeira);
    //this.cartService.setGroup(this.grupo);
  }

  showSub(item:any) {
    this.cadeira = item.cadeira;
    this.grupo = item.grupo;
    this.showSubgroups = true;
  }
}
