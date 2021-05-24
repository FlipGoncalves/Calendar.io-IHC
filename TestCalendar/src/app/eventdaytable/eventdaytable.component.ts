import { Component, OnInit } from '@angular/core';

export interface Events15Maio {
  event: string;
  time: string;
}

export interface Events {
  event: string;
  time: string;
}

const ELEMENT_DATA: Events[] = [
  {time: "6:00", event: ''},
  {time: "7:00", event: ''},
  {time: "8:00", event: ''},
  {time: "9:00", event: 'Acordar'},
  {time: "10:00", event: 'Trabalho'},
  {time: "11:00", event: 'Trabalho'},
  {time: "12:00", event: 'Trabalho'},
  {time: "13:00", event: 'Almocar'},
  {time: "14:00", event: 'Trabalho'},
  {time: "15:00", event: 'Trabalho'},
  {time: "16:00", event: 'Trabalho'},
  {time: "17:00", event: 'Trabalho'},
  {time: "18:00", event: 'Trabalho'},
  {time: "19:00", event: 'Trabalho'},
  {time: "20:00", event: 'Jantar'},
  {time: "21:00", event: ''},
  {time: "22:00", event: ''},
  {time: "23:00", event: ''},
  {time: "00:00", event: ''}
];

@Component({
  selector: 'app-eventdaytable',
  templateUrl: './eventdaytable.component.html',
  styleUrls: ['./eventdaytable.component.css']
})
export class EventdaytableComponent implements OnInit {

  showMyContainer: boolean = false;
  shownormal: boolean = true;
  constructor() { }
  displayedColumns: string[] = ['time', 'event'];
  public dataSource: any = ELEMENT_DATA;
  ngOnInit(): void {
  }
}
