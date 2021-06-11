import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-semanal',
  templateUrl: './semanal.component.html',
  styleUrls: ['./semanal.component.css']
})
export class SemanalComponent implements OnInit {

  constructor (
    private cartService: CartService,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.items = this.forloop();
    this.dataSource = this.filter(this.items);
    this.changeDetectorRefs.detectChanges();
  }

  public date: string = this.cartService.getData();
  public items: any = this.cartService.getItems();
  public dataSource: any = this.items;
  displayedColumns: string[] = ['title', 'startdate', 'enddate', 'starttime', 'endtime', 'repetition', 'reminder', 'notes'];

  filter(events: any): any {
    let array: any = [];

    let sunday = this.getSunday(new Date());  //beggining of the week
    let saturday = sunday + 6;                // end of the week

    for (let item of events) {
      let sdate = (new Date(item.startdate)).getDate();
      let edate = (new Date(item.enddate)).getDate();
      if ((sdate >= sunday  && sdate <= saturday) || (edate <= saturday  && edate >= sunday)) {
        array.push(item);
      }
    }
    return array;
  }

  getSunday(d: Date) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:0); // adjust when day is sunday
    return (new Date(d.setDate(diff))).getDate();
  }

  forloop() {
    let array: any = [];
    if (this.cartService.filter_group == true) {
      this.items = this.cartService.eventos_groups;
      for (let item of this.items) {
        if (item.cadeira == this.cartService.groupFilter.cadeira && item.grupo == this.cartService.groupFilter.grupo) {
          array.push(item)
        }
      }
    } else if (this.cartService.filter_subgroup == true) {
      this.items = this.cartService.eventos_subgroups;
      for (let item of this.items) {
        if (item.cadeira == this.cartService.subgroupFilter.cadeira && item.grupo == this.cartService.subgroupFilter.grupo && item.subgrupo == this.cartService.subgroupFilter.subgrupo) {
          array.push(item)
        }
      }
      this.items = this.cartService.eventos_groups;
      for (let item of this.items) {
        if (item.cadeira == this.cartService.groupFilter.cadeira && item.grupo == this.cartService.groupFilter.grupo) {
          array.push(item)
        }
      }
    }
    this.items = this.cartService.getItems();
    for (let item of this.items) {
      array.push(item)
    }
    return array;
  }
}
