import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private cartService: CartService,

  ) { }

  public newEvent: boolean = false;

  public groups: any = this.cartService.groups;
  public group: any = [];
  public class: any = [];
  public sub: any = this.cartService.subgroups;
  public subs: any = [];

  cadeira: string="";
  grupo: string="";
  subgrupo: string = "";

  ngOnInit(): void {
    this.class = []; //n tenho a certeza
    this.subs = []; //n tenho a certeza
    for (let item of this.groups) {
      if (! this.group.includes(item.cadeira))
        this.group.push(item.cadeira);
    }
  }

  toggle() {
    this.class = [];
    this.subs = []; //n tenho a certeza
    for (let item of this.groups) {
      if (! this.class.includes(item.grupo) &&  item.cadeira === this.cadeira)
          this.class.push(item.grupo);
    }
  }

  togglesubgroups() {
    this.subs = [];
    for (let item of this.sub) {
      if (! this.subs.includes(item.subgrupo) &&  item.cadeira === this.cadeira && item.grupo === this.grupo)
          this.subs.push(item.subgrupo);
    }
  }

  search() {
    if(! (this.cadeira === "" || this.grupo === "") && this.subgrupo === "")
      this.cartService.setFilterGroupTrue(this.cadeira,this.grupo);
    if (! (this.cadeira === "" || this.grupo === "" || this.subgrupo === ""))
      this.cartService.setSubGroupFilterTrue(this.cadeira,this.grupo, this.subgrupo);
  }

  newevent() {
    this.search();
    this.newEvent = true;
  }
}
