import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
 
@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  public tituloControl = new FormControl('');
  public product = {};

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private Home: HomeComponent,
  ) { }

  ngOnInit(): void {
    console.log("open");
  }

  title: string = "";
  start_date: string = this.cartService.getData();
  end_date: string = this.cartService.getData();
  start_time: string = "";
  end_time: string = "";
  rem: string = "";
  rep: string = "";
  notes: string = "";
  location: string = "";

  clickme() {
      switch(+this.rep) {
        case 1:
          this.rep = "Daily";
          break;
        case 7:
          this.rep = "Weeakly"
          break;
        case 15:
          this.rep = "Every 2 Weeks"
          break;
        case 30:
          this.rep = "Monthly"
          break;
        case 365:
          this.rep = "Yearly"
          break;
      }
    if (this.cartService.filter_group == true) {
      this.product = {title: this.title, startdate: this.start_date, enddate: this.end_date, starttime: this.start_time, endtime: this.end_time, reminder: this.rem, repetition: this.rep, notes: this.notes, location: this.location, type: "", cadeira: "", grupo: ""};
      this.cartService.addToCartInGroup(this.product);
    }else if (this.cartService.filter_subgroup == true){
      this.product = {title: this.title, startdate: this.start_date, enddate: this.end_date, starttime: this.start_time, endtime: this.end_time, reminder: this.rem, repetition: this.rep, notes: this.notes, location: this.location, type: "", cadeira: "", grupo: "", subgrupo: ""};
      this.cartService.addToCartInSubGroup(this.product);
    }
    else{
      this.product = {title: this.title, startdate: this.start_date, enddate: this.end_date, starttime: this.start_time, endtime: this.end_time, reminder: this.rem, repetition: this.rep, notes: this.notes, location: this.location, type: ""};
      this.cartService.addToCart(this.product);  
    }
    this.Home.newEvent = false;
  }

  closeme() {
    this.Home.newEvent = false;
  }
}
