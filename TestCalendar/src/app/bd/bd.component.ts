import { Component, OnInit } from '@angular/core';
import { CreateGroupComponent } from '../create-group/create-group.component';

@Component({
  selector: 'app-bd',
  templateUrl: './bd.component.html',
  styleUrls: ['./bd.component.css']
})
export class BdComponent implements OnInit {

  constructor(
    private courses: CreateGroupComponent
  ) { }

  ngOnInit(): void {
  }

  onclick(): void {
    alert("set")
    this.courses.setCourse("BD")
  }

}
