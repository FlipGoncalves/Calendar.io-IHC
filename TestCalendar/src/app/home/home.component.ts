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

  public filteractivated: any = this.cartService.groupFilter;
  public cadeiras: any = this.cartService.groups;
  public group: any = [];
  public class: any = [];

  cadeira: string="";
  practical: string="";

  ngOnInit(): void {
    for (let item of this.cadeiras) {
      if (! this.group.includes(item.cadeira))
        this.group.push(item.cadeira);
    }
  }

  toggle() {
    this.class = [];
    for (let item of this.cadeiras) {
      if (! this.class.includes(item.grupo) &&  item.cadeira === this.cadeira)
          this.class.push(item.grupo);
    }
  }

  search() {
    if(! (this.cadeira === "" || this.practical === ""))
      this.cartService.setFilterTrue(true,this.cadeira,this.practical);
  }

}
