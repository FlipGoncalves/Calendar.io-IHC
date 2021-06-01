import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

    constructor(private cartService: CartService) { }

    ngOnInit(): void {
    }

    public filteractivated: any = this.cartService.groupFilter;

    getfilteractivated() {
        let filteractivated: any = this.cartService.groupFilter;
        return filteractivated.cadeira + " " + filteractivated.grupo;
    }

    getCourseName() {
        let filteractivated: any = this.cartService.groupFilter;

        if (filteractivated.cadeira == "IHC") {
            return "Interação Humano-Computador"
        }
        if (filteractivated.cadeira == "PDS") {
            return "Padrões e Desenvolvimento de Software"
        }
        if (filteractivated.cadeira == "BD") {
            return "Base de Dados"
        }
        return null;
    }

}
