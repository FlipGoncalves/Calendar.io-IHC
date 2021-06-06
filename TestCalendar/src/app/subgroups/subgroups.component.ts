import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CoursesComponent } from '../courses/courses.component';


@Component({
  selector: 'app-subgroups',
  templateUrl: './subgroups.component.html',
  styleUrls: ['./subgroups.component.css']
})
export class SubgroupsComponent implements OnInit {

  constructor(
    private cartService: CartService,private courseComponent: CoursesComponent
  ) {}

  public subgroups: any = this.cartService.getSubGroups();
  public group: any = this.cartService.groupFilter;
  public course: string = this.cartService.getCourse();
  public people_groups: any = this.cartService.getPeople_groups();
  public options_people: any;
  nameNewSubgroup: string = "";
  allComplete: boolean = false;

  public ngOnInit(): void {
      this.subgroups = this.forloop();
      const modal: HTMLElement = document.getElementById("myModal") as HTMLElement;
      modal.style.display = "block";
    }

    forloop() {
      let array: any = [];
      for (let item of this.subgroups) {
        if (item.cadeira === this.course && item.grupo === this.group.grupo) {
          array.push(item)
        }
      }
      return array;
    }

    close() {
      const modal: HTMLElement = document.getElementById("myModal") as HTMLElement;
      modal.style.display = "none";
      this.courseComponent.showSubcreate = false;
    }

    setAllPeople() {
      if(this.allComplete)
        this.allComplete = false;
      else this.allComplete = true;
      this.options_people.forEach((t: any) => t.selected = this.allComplete);
    }

  people_choices() {
    let array: any = [];
    for (let item of this.people_groups) {
      if (item.cadeira == this.course && item.grupo == this.group.grupo) {
        if (!array.some((e: { name: any; }) => e.name == item.name)) {
          array.push(item);
        }
      }
    }
    this.options_people = array;
    return this.options_people;
  }

  save() {
    let array: any = [];
    for (let item of this.options_people) {
      if (item.selected==true) {
        array.push(item);
      }
    }
    
    this.cartService.addSubGroup(array, this.nameNewSubgroup);
    this.courseComponent.showSubcreate = false;
  }

}
