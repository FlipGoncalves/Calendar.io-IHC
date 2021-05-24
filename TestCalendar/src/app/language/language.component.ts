import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor() { }

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

}
