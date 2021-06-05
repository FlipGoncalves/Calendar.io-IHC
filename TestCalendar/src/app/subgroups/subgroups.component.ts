import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-subgroups',
  templateUrl: './subgroups.component.html',
  styleUrls: ['./subgroups.component.css']
})
export class SubgroupsComponent implements OnInit {

  constructor(private cartService: CartService) { }

    ngOnInit(): void {
      this.cadeira = this.cartService.getCourse();
      this.grupo = this.cartService.getGroup();
    }

    grupo: string = "";
    cadeira: string = "";
    title: string = "";

    create() {
      this.cartService.addSubGroup({cadeira: this.cadeira, grupo: this.grupo}, this.title);
    }

}
