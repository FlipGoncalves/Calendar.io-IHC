import { Component, OnInit } from '@angular/core';
import { fadeInItems } from '@angular/material/menu';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
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
  ) { }
  displayedColumns: string[] = ['title', 'date'];
  public date: string = this.cartService.getData();
  public items: any = this.cartService.getItems();
  //for loop
  public dataSource: any = this.items;
  ngOnInit(): void {
  }
}
