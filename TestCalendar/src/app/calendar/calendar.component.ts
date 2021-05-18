import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar.component.scss'],
    templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit{
    @ViewChild('calendar', { read: IgxCalendarComponent })

    public formatOptions: any;
    public formatViews: any;
    public locales = ['EN', 'DE', 'FR', 'PT'];
    public locale = 'EN';

    public ngOnInit() {
        this.formatOptions = { day: '2-digit', month: 'long', weekday: 'long', year: 'numeric' };
        this.formatViews = { day: true, month: true, year: true };
    }
}
