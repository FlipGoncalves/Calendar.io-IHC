import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any = [
    {title: "ferias", startdate: "2021-05-12", enddate: "2021-05-12", starttime: "19:20", endtime: "19:40", reminder: "none", repetition: "7", notes: ""}
  ];
  pessoas: any = [
    {name: "filipe", cadeira: "IHC", turma: "P3", grupo: "G2", selected: false},
    {name: "eva", cadeira: "IHC", turma: "P3", grupo: "G2", selected: false},
    {name: "pedro", cadeira: "IHC", turma: "P3", grupo: "G2", selected: false},
    {name: "rodrigo", cadeira: "IHC", turma: "P3", grupo: "G5", selected: false},
    {name: "tomas", cadeira: "IHC", turma: "P1", grupo: "G1", selected: false},
  ];
  cadeiras: any = [
    {cadeira: "IHC", turma: "P1", grupo: "G1", selected: false},
    {cadeira: "IHC", turma: "P1", grupo: "G2", selected: false},
    {cadeira: "IHC", turma: "P1", grupo: "G3", selected: false},
    {cadeira: "IHC", turma: "P1", grupo: "G4", selected: false},
    {cadeira: "PDS", turma: "P2", grupo: "G1", selected: false},
    {cadeira: "IHC", turma: "P2", grupo: "G2", selected: false},
    {cadeira: "BD", turma: "P2", grupo: "G3", selected: false},
    {cadeira: "IHC", turma: "P2", grupo: "G4", selected: false},
  ];

  data: string = "";
  course: string = "";

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getAlunos() {
    return this.pessoas;
  }

  getGrupos() {
    return this.cadeiras;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  setData(date: string) {
    this.data = date;
  }

  getData() {
    return this.data;
  }

  setCourse(course: string) {
    this.course = course;
  }

  getCourse() {
    return this.course;
  }
}
