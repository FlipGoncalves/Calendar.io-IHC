import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

export interface Events {
  title: string;
  date: string;
}

@Component({
  selector: 'app-eventdaytable',
  templateUrl: './eventdaytable.component.html',
  styleUrls: ['./eventdaytable.component.css']
})
export class EventdaytableComponent implements OnInit {

  showMyContainer: boolean = false;
  shownormal: boolean = true;

  constructor(
    private cartService: CartService
  ) {}

  displayedColumns: string[] = ['title', 'date'];
  public date: string = this.cartService.getData();
  public items: any = this.cartService.getItems();
  public dataSource: any = this.items;

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.items = this.forloop();
    this.dataSource = this.items;
  }

  ngOnDestroy() {
  }

  setdata(date: string) {
    this.date = date;
  }

  forloop() {
    let array: any = [];
    let newDate = new Date(this.date);
    for (let item of this.items) {
      let itemdate = new Date(item.date)
      if (itemdate <= newDate) {
        array.push(item)
      }
    }
    return array;
  }
}
