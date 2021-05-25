import { CreateGroupComponent } from './create-group.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface IVehicle{
  year: number;
  make: string;
  model: string;
}

export interface IVehicleMake{
  name:string;
  checked :boolean;
}

interface IVehicleMakeFilter{
  [key:string]: IVehicleMake;
}


@Injectable()
export class CreateGroupService {

  public cars: Observable<IVehicle[]>;
  public makes: Observable<IVehicleMake[]>;

  private baseUrl: string;
  private http : HttpClient;
  private vehiclesSubject: BehaviorSubject<IVehicle[]>;  
  private makesSubject: BehaviorSubject<IVehicleMake[]>; 
  
  private storage: {
    vehicles: IVehicle[],           //vehicles:[]
    filteredVehicles: IVehicle[];
    makes: IVehicleMake[];          //IVehicleMakeFilter //makes:{}
    filterOptions: IVehicleMakeFilter;
  };

  constructor(http: HttpClient) {    
    this.http = http;
    this.baseUrl = "//5a9731415702690012833140.mockapi.io/ozkary-api/vehicles"
    this.storage = { vehicles: [], filteredVehicles:[], makes:[] , filterOptions:{}};
    this.vehiclesSubject = <BehaviorSubject<IVehicle[]>><unknown>new BehaviorSubject([]);

    this.makesSubject = <BehaviorSubject<IVehicleMake[]>><unknown>new BehaviorSubject([]);

    this.cars = this.vehiclesSubject.asObservable();    
    this.makes = this.makesSubject.asObservable();    
  }

  public init() {
    
      this.http.get(this.baseUrl)            
       .subscribe(data => {
        this.storage.vehicles = <IVehicle[]>data;
        this.storage.filteredVehicles = this.storage.vehicles;

        this.storage.vehicles.forEach((item, index) => {
          if (!this.storage.filterOptions[item.make]) {
            this.storage.filterOptions[item.make] = {name:item.make,checked:true};            
            this.storage.makes.push( this.storage.filterOptions[item.make]);
          };                     
        }); //forEach

        let clone = Object.assign({}, this.storage);
        this.vehiclesSubject.next(clone.filteredVehicles);        
        this.makesSubject.next(clone.makes);      
    }, 
      error => console.log('Could not load vehicles.')
    );           
  }

  public filter(make:IVehicleMake){
      
      let filterOptions = this.storage.filterOptions;  
      filterOptions[make.name].checked == make.checked;         
          
      this.storage.filteredVehicles= this.storage.vehicles.filter((item,idx,arr) => {
            return filterOptions[item.make].checked;
      });

      let filtered = Object.assign([],this.storage.filteredVehicles);
      this.vehiclesSubject.next(filtered);  
  }

}