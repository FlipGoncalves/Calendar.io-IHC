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

  public groups: any = this.cartService.groups;
  public group: any = [];
  public class: any = [];

  cadeira: string="";
  grupo: string="";

  ngOnInit(): void {
    for (let item of this.groups) {
      if (! this.group.includes(item.cadeira))
        this.group.push(item.cadeira);
    }
  }

  toggle() {
    this.class = [];
    for (let item of this.groups) {
      if (! this.class.includes(item.grupo) &&  item.cadeira === this.cadeira)
          this.class.push(item.grupo);
    }
  }

  search() {
    if(! (this.cadeira === "" || this.grupo === ""))
      this.cartService.setFilterGroupTrue(this.cadeira,this.grupo);
      
  }

}
