import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CoursesComponent } from '../courses/courses.component';


@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css'],
})

export class CreateGroupComponent implements OnInit {

  constructor(
    private cartService: CartService,private courseComponent: CoursesComponent
  ) {}

  displayedColumns: string[] = ['cadeira', 'grupo'];
  public groups: any = this.cartService.getGroups();
  public course: string = this.cartService.getCourse();
  public people_groups: any = this.cartService.getPeople_groups();
  public options_people: any;
  nameNewGroup: string = "";

  public ngOnInit() {
    this.groups = this.forloop();
    const modal: HTMLElement = document.getElementById("myModal") as HTMLElement;
    modal.style.display = "block";
  }

  forloop() {
    let array: any = [];
    for (let item of this.groups) {
      if (item.cadeira === this.course) {
        array.push(item)
      }
    }
    return array;
  }

  setCourse(course: string) {
    this.course = course;
  }

  allComplete: boolean = false;
  allCompletePeople: boolean = false;

  close() {
    const modal: HTMLElement = document.getElementById("myModal") as HTMLElement;
    modal.style.display = "none";
    this.courseComponent.showCreateGroup = false;

  }

  setAllPeople() {
    if(this.allCompletePeople)
      this.allCompletePeople = false;
    else this.allCompletePeople = true;
    this.options_people.forEach((t: any) => t.selected = this.allCompletePeople);
  }

  people_choices() {
    let array: any = [];
    for (let item of this.people_groups) {
      if (item.cadeira == this.course) {
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
    
    this.cartService.addGroup(array, this.nameNewGroup);
    this.courseComponent.showCreateGroup = false;


  }

}

