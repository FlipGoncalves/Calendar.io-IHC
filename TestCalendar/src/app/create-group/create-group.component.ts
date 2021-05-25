import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IVehicle, IVehicleMake, CreateGroupService } from './create-group.service'; //MUDAR

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})

export class CreateGroupComponent implements OnInit {

  cars: Observable<IVehicle[]> | undefined;
  makes : Observable<IVehicleMake[]> | undefined;
  found :number | undefined;
  private svcApp:CreateGroupService;

  constructor(svc: CreateGroupService) {
    this.svcApp = svc;
  }

  ngOnInit() {
    this.cars = this.svcApp.cars;
    this.makes = this.svcApp.makes;
    this.svcApp.init();
    this.cars.subscribe(items=>this.found = items.length);
  }

  public filter(ref: IVehicleMake){
      this.svcApp.filter(ref);           
  }
}

