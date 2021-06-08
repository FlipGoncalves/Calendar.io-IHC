import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent, IgxDialogComponent } from 'igniteui-angular';
import { CartService } from '../cart.service';
import { EventdaytableComponent } from '../eventdaytable/eventdaytable.component';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar.component.scss'],
    templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit{
    @ViewChild('calendar', { static: true }) static calendar: IgxCalendarComponent;
    @ViewChild('alert', { static: true }) static dialog: IgxDialogComponent;

    constructor(
        private cartService: CartService,
        private event: EventdaytableComponent
    ) { }

    public formatOptions: any;
    public formatViews: any;
    public locale = 'EN';
    public showMyContainer: boolean = false;

    public ngOnInit() {
        this.formatOptions = { Day: '2-digit', Month: 'long', weekday: 'long', Year: 'numeric' };
        this.formatViews = { Day: true, Month: true, Year: true };
    }

    public onSelection(date: Date | Date[]) {
        if(this.showMyContainer)
            this.showMyContainer = false;
            
        let day = (+JSON.stringify(date).substring(9,11));
        let month = (+JSON.stringify(date).substring(6,8));
        let year = (+JSON.stringify(date).substring(1,5));
        
        let space = "";
        let secondspace = "";
        if (month < 10) {
            space = "0";
        }
        if (day < 10) {
            secondspace = "0";
        }
        this.cartService.setData(year+"-"+space+month+"-"+secondspace+day);
        this.event.setdata(year+"-"+space+month+"-"+secondspace+day);
        this.event.ngOnInit();
        
        this.showMyContainer = true;
    }

    close() {
        this.showMyContainer = false;
    }
}
