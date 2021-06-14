import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
    private cartService: CartService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  displayedColumns: string[] = ['title', 'startdate', 'enddate', 'starttime', 'endtime', 'repetition', 'reminder', 'notes'];
  public date: string = this.cartService.getData();
  public items: any = this.cartService.getItems();
  public dataSource: any = this.items;

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.items = this.forloop();
    this.dataSource = this.items;
    this.changeDetectorRefs.detectChanges();
  }

  setdata(date: string) {
    this.date = date;
  }

  repet(rep: String) {
    switch(rep) {
      case "Daily":
        return 1;
      case "Weakly":
        return 7;
      case "Every 2 Weeks":
        return 14;
      case "Monthly":
        return 30;
      case "Yearly":
        return 365;
    }
    return -1;
  }

  forloop() {
    let array: any = [];
    let newDate = new Date(this.date);
    newDate.setDate(newDate.getDate() + 1); //??
    if (this.cartService.filter_group == true) {
      this.items = this.cartService.eventos_groups;
      for (let item of this.items) {
        let startdate = new Date(item.startdate)
        let enddate = new Date(item.enddate)
        let repetition = this.repet(item.repetition);
        let timeperiod = enddate.getDate() - startdate.getDate();
        let count = 0;
        if (item.cadeira == this.cartService.groupFilter.cadeira && item.grupo == this.cartService.groupFilter.grupo) {
          if ((startdate <= newDate && newDate <= enddate)) {
            array.push(item)
            count = 1;
          }
          if (repetition && count == 0) {
            if ((((newDate.getDate() - startdate.getDate()) % (repetition) == 0) && startdate.getDate() < newDate.getDate()) || ((newDate.getDate() - enddate.getDate()) % (repetition) == 0) && (enddate.getDate() > newDate.getDate())) {
              array.push(item)
              count = 1;
            }
            if (newDate.getDate() - enddate.getDate() >= (repetition-timeperiod) && count == 0 && newDate.getDate() - startdate.getDate() <= (repetition+timeperiod))
              array.push(item)
          }
        }
      }
    } else if (this.cartService.filter_subgroup == true) {
      this.items = this.cartService.eventos_subgroups;
      for (let item of this.items) {
        let startdate = new Date(item.startdate)
        let enddate = new Date(item.enddate)
        let repetition = this.repet(item.repetition);
        let count = 0;
        let timeperiod = enddate.getDate() - startdate.getDate();
        if (item.cadeira == this.cartService.groupFilter.cadeira && item.grupo == this.cartService.groupFilter.grupo && item.subgrupo == this.cartService.subgroupFilter.subgrupo) {
          if ((startdate <= newDate && newDate <= enddate)) {
            array.push(item)
            count = 1;
          }
          if (repetition && count == 0) {
            if ((newDate.getDate() - startdate.getDate()) % (repetition) == 0 || (newDate.getDate() - enddate.getDate()) % (repetition) == 0) {
              array.push(item)
            }
            if (newDate.getDate() - enddate.getDate() >= (repetition-timeperiod) && count == 0 && newDate.getDate() - startdate.getDate() <= (repetition+timeperiod))
              array.push(item)
          }
        }
      }
    }
    else {
      this.items = this.cartService.getItems();
      for (let item of this.items) {
        let startdate = new Date(item.startdate)
        let enddate = new Date(item.enddate)
        let repetition = this.repet(item.repetition);
        let count = 0;
        let timeperiod = enddate.getDate() - startdate.getDate();
        if ((startdate <= newDate && newDate <= enddate)) {
          array.push(item)
          count = 1;
        }
        if (repetition && count == 0) {
          if ((newDate.getDate() - startdate.getDate()) % (repetition) == 0 || (newDate.getDate() - enddate.getDate()) % (repetition) == 0) {
            array.push(item)
          }
          if (newDate.getDate() - enddate.getDate() >= (repetition-timeperiod) && count == 0 && newDate.getDate() - startdate.getDate() <= (repetition+timeperiod))
              array.push(item)
        }
      }
    }
    return array;
  }
}
