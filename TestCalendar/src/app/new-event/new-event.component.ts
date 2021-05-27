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
    this.product = {title: this.title, startdate: this.start_date, enddate: this.end_date, starttime: this.start_time,
                      endtime: this.end_time, reminder: this.rem, repetition: this.rep, notes: this.notes}
    this.addToCart(this.product);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
