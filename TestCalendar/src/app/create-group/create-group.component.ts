import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css'],
})

export class CreateGroupComponent implements OnInit {

  constructor(
    private cartService: CartService,
  ) {}

  displayedColumns: string[] = ['cadeira', 'grupo'];
  public groups: any = this.cartService.getGroups();
  public course: string = this.cartService.getCourse();
  public showContainer: boolean = false;
  public selec: string = "";
  public people: any = this.cartService.getAlunos();
  public people_groups: any = this.cartService.getPeople_groups();
  public options_people: any;
  nameNewGroup: string = "";

  public ngOnInit() {
    this.groups = this.forloop();
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

  setAll() {
    if(this.allComplete)
      this.allComplete = false;
    else this.allComplete = true;
    this.groups.forEach((t: any) => t.selected = this.allComplete);
  }

  open() {
    const modal: HTMLElement = document.getElementById("myModal") as HTMLElement;
    modal.style.display = "block";
    for (let item of this.groups) {
      if (item.selected == true) {
        this.selec += (item.cadeira + " " + item.grupo) + "; ";
      }
    }
    this.showContainer = true;
  }

  close() {
    const modal: HTMLElement = document.getElementById("myModal") as HTMLElement;
    modal.style.display = "none";
    this.selec = "";
    this.showContainer = false;
  }

  setAllPeople(selected: boolean) {
    this.allCompletePeople = selected;
    this.options_people.forEach((t: any) => t.selected = selected);
  }

  people_choices() {
    let array: any = [];
    for (let item of this.people_groups) {
      for (let i of this.groups) {
        if (item.grupo == i.grupo && i.selected==true && item.cadeira == this.course) {
          if (!array.some((e: { name: any; }) => e.name == item.name)) {
            array.push(item);
          }
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

  }

}

