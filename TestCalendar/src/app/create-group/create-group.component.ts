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

  setAll(selected: boolean) {
    this.allComplete = selected;
    this.dataSource.forEach((t: any) => t.selected = selected);
  }
}

