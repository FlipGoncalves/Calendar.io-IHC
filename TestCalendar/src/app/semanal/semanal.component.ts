import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-semanal',
  templateUrl: './semanal.component.html',
  styleUrls: ['./semanal.component.css']
})
export class SemanalComponent implements OnInit {

  constructor (
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.dataSource = this.filter(this.items);
  }

  public items: any = this.cartService.getItems();
  public dataSource: any = this.items;
  displayedColumns: string[] = ['title', 'startdate', 'enddate', 'starttime', 'endtime', 'repetition', 'reminder', 'notes'];

  filter(events: any): any {
    let array: any = [];

    for (let item of events) {
      let sdate = (new Date(item.startdate)).getDate();
      if (item.startdate)
        alert(sdate)
    }

    return array;
  }

}


