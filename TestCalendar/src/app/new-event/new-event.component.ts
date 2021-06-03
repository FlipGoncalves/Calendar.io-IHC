import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
 
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
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  title: string = "";
  start_date: string = "";
  end_date: string = "";
  start_time: string = "";
  end_time: string = "";
  rem: string = "";
  rep: string = "";
  notes: string = "";

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
    if (this.cartService.filter == false) {
      this.product = {title: this.title, startdate: this.start_date, enddate: this.end_date, starttime: this.start_time, endtime: this.end_time, reminder: this.rem, repetition: this.rep, notes: this.notes, type: ""};
      this.cartService.addToCart(this.product);  
    }else{
      this.product = {title: this.title, startdate: this.start_date, enddate: this.end_date, starttime: this.start_time, endtime: this.end_time, reminder: this.rem, repetition: this.rep, notes: this.notes, type: "", cadeira: "", grupo: ""};
      this.cartService.addToCartInGroup(this.product);
    }
    
  }
}
