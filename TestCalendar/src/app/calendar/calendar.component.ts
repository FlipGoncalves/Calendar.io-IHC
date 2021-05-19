import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent, IgxDialogComponent } from 'igniteui-angular';
import { EventdaytableComponent } from '../eventdaytable/eventdaytable.component'

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar.component.scss'],
    templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit{
    @ViewChild('calendar', { static: true }) static calendar: IgxCalendarComponent;
    @ViewChild('alert', { static: true }) static dialog: IgxDialogComponent;
    public loggerHeader = `Interact with the calendar to see the events for the day:`;

    public formatOptions: any;
    public formatViews: any;
    public locales = ['EN', 'DE', 'FR', 'PT'];
    public locale = 'EN';
    public showMyContainer: boolean = false;
    public showContainer15maio: boolean = false;

    public ngOnInit() {
        this.formatOptions = { Day: '2-digit', Month: 'long', weekday: 'long', Year: 'numeric' };
        this.formatViews = { Day: true, Month: true, Year: true };
    }

    public onSelection(date: Date | Date[]) {
        const logger: HTMLElement = document.querySelector('.logger') as HTMLElement;
        let day = (+JSON.stringify(date).substring(9,11));
        let month = (+JSON.stringify(date).substring(6,8));
        let year = (+JSON.stringify(date).substring(1,5));
        if (day == 14 && month == 5) {
            this.showContainer15maio = true;
            this.showMyContainer = false;
        } else {
            this.showMyContainer = true;
            this.showContainer15maio = false;
        }
        //logger.innerHTML = `${day}-${month}-${year}`;
    }
}
