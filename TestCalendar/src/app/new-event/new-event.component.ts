import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  public tituloControl = new FormControl('');

  ngOnInit(): void {
  }

  title: string = "";
  start_date: string = "";
  end_date: string = "";
  start_time: string = "";
  end_time: string = "";
  rem: string = "";
  rep: string = "";
  notes: string = "";

  clickme() {
    alert(this.title + "\n" + this.start_date + "\n" + this.end_date + "\n" + this.start_time + "\n" + this.end_time + "\n" + this.rem + "\n" + this.rep + "\n" + this.notes);
  }
}
