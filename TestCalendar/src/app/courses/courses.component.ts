import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { SemanalComponent } from '../semanal/semanal.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private semanal: SemanalComponent
  ) { }

  public cadeira: string = "";
  public grupo: string = "";
  public subgrupo: string = "";
  public showSubgroups: boolean = false;
  public showSubcreate: boolean = false;
  public showCreateGroup: boolean = false;
  public groups: any = this.cartService.getGroups();
  public subgroups: any = this.cartService.getSubGroups();

  public showsemanal: boolean = true;

  ngOnInit(): void {
  }

  onclick(course: string): void {
    this.cartService.setCourse(course)
    this.showCreateGroup = true;
  }

  toggle() {
    this.showSubgroups = false;
    //this.showSubcreate = false;
    this.cartService.filter_group = false;
    this.cartService.filter_subgroup = false;
    this.cartService.cadeira;
    this.showsemanal = false;
    this.semanal.ngOnInit();
    this.showsemanal = true;
  }
  
  activateFiltergroups(item:any) {
    this.cartService.setFilterSubGroupFalse();
    this.cartService.setFilterGroupTrue(item.cadeira,item.grupo);
    this.showsemanal = false;
    this.semanal.ngOnInit();
    this.showsemanal = true;
    this.cartService.setCourse(item.cadeira);
  }

  activateFiltersubgroups(item:any) {
    this.cartService.setFilterGroupFalse();
    this.cartService.setSubGroupFilterTrue(item.cadeira,item.grupo, item.subgrupo);
    this.showsemanal = false;
    this.semanal.ngOnInit();
    this.showsemanal = true;
    this.cartService.setCourse(item.cadeira);
  }

  desactivateFiltergroups() {
    this.cartService.setFilterGroupFalse();
    this.cartService.setFilterSubGroupFalse();
    this.showSubgroups = false;
    this.showSubcreate = false;
    this.showCreateGroup = false;
    this.showsemanal = false;
    this.semanal.ngOnInit();
    this.showsemanal = true;
  }

  desactivateFiltersubgroups() {
    this.cartService.setFilterSubGroupFalse();
    this.cartService.setFilterGroupTrue(this.cadeira,this.grupo);
    this.showSubcreate = false;
    this.showCreateGroup = false;
    this.showsemanal = false;
    this.semanal.ngOnInit();
    this.showsemanal = true;
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

  showSub(item:any, type: String) {
    this.cadeira = item.cadeira;
    this.grupo = item.grupo;
    if (type === "sub")
      this.subgrupo = item.subgrupo;
    else 
      this.subgrupo = "";
    this.showSubgroups = true;
  }
}
