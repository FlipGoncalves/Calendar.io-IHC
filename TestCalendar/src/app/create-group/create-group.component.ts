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

  displayedColumns: string[] = ['cadeira', 'pratica', 'grupo'];
  public cadeiras: any = this.cartService.getGrupos();
  public dataSource: any = this.cadeiras;
  public course: string = this.cartService.getCourse();
  public showContainer: boolean = false;
  public selec: string = "";
  public people: any = this.cartService.getAlunos();

  public ngOnInit() {
    this.cadeiras = this.cartService.getGrupos();
    this.dataSource = this.forloop();
  }

  forloop() {
    let array: any = [];
    for (let item of this.cadeiras) {
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

  setAll(selected: boolean) {
    this.allComplete = selected;
    this.dataSource.forEach((t: any) => t.selected = selected);
  }

  open() {
    const modal: HTMLElement = document.getElementById("myModal") as HTMLElement;
    modal.style.display = "block";
    for (let item of this.dataSource) {
      if (item.selected == true) {
        this.selec += (item.turma + " - " + item.grupo) + "; ";
      }
    }
    this.showContainer = true;
  }

  close() {
    const modal: HTMLElement = document.getElementById("myModal") as HTMLElement;
    modal.style.display = "none";
    this.showContainer = false;
  }

  setAllPeople(selected: boolean) {
    alert(selected)
    this.allCompletePeople = selected;
    this.people.forEach((t: any) => t.selected = selected);
  }

}

