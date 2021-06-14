import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any = [
    { title: "Ferias", startdate: "2021-06-01", enddate: "2021-06-03", starttime: "09:00", endtime: "10:00", reminder: "none", repetition: "Weakly", notes: "", location: "", type: "" },
    { title: "geral 1", startdate: "2021-06-09", enddate: "2021-06-16", starttime: "09:00", endtime: "10:00", reminder: "none", repetition: "Weakly", notes: "", location: "", type: "" },
    { title: "geral 2", startdate: "2021-06-02", enddate: "2021-06-09", starttime: "09:00", endtime: "10:00", reminder: "none", repetition: "Weakly", notes: "", location: "", type: "" }
  ];

  groups: any = [
    { cadeira: "IHC", grupo: "TP1", filter: false, selected: false },
    { cadeira: "IHC", grupo: "P1", filter: false, selected: false },
    { cadeira: "IHC", grupo: "P2", filter: false, selected: false },
    { cadeira: "IHC", grupo: "P3", filter: false, selected: false },
    { cadeira: "BD", grupo: "TP1", filter: false, selected: false },
    { cadeira: "BD", grupo: "P1", filter: false, selected: false },
    { cadeira: "BD", grupo: "P2", filter: false, selected: false },
    { cadeira: "BD", grupo: "P3", filter: false, selected: false },
    { cadeira: "PDS", grupo: "TP1", filter: false, selected: false },
    { cadeira: "PDS", grupo: "P1", filter: false, selected: false },
    { cadeira: "PDS", grupo: "P2", filter: false, selected: false },
    { cadeira: "PDS", grupo: "P3", filter: false, selected: false },
  ]


  people_groups: any = [
    { name: "Filipe Gonçalves", nmec: "98083", cadeira: "IHC", grupo: "TP1", selected: false },
    { name: "Eva Bartolomeu", nmec: "98513", cadeira: "IHC", grupo: "TP1", selected: false },
    { name: "Pedro Sobral", nmec: "92491", cadeira: "IHC", grupo: "TP1", selected: false },
    { name: "Filipe Gonçalves", nmec: "98083", cadeira: "IHC", grupo: "P3", selected: false },
    { name: "Eva Bartolomeu", nmec: "98513", cadeira: "IHC", grupo: "P3", selected: false },
    { name: "Pedro Sobral", nmec: "92491", cadeira: "IHC", grupo: "P3", selected: false },
    { name: "Rodrigo Silva", nmec: "98080", cadeira: "IHC", grupo: "P2", selected: false },
    { name: "Rodrigo Silva", nmec: "98080", cadeira: "IHC", grupo: "TP1", selected: false },
    { name: "Tomas Oliveira", nmec: "97890", cadeira: "IHC", grupo: "TP1", selected: false },
    { name: "Tomas Oliveira", nmec: "97890", cadeira: "IHC", grupo: "P1", selected: false },
    { name: "Filipe Gonçalves", nmec: "98083", cadeira: "BD", grupo: "TP1", selected: false },
    { name: "Eva Bartolomeu", nmec: "98513", cadeira: "BD", grupo: "TP1", selected: false },
    { name: "Pedro Sobral", nmec: "92491", cadeira: "BD", grupo: "TP1", selected: false },
    { name: "Filipe Gonçalves", nmec: "98083", cadeira: "BD", grupo: "P3", selected: false },
    { name: "Eva Bartolomeu", nmec: "98513", cadeira: "BD", grupo: "P3", selected: false },
    { name: "Pedro Sobral", nmec: "92491", cadeira: "BD", grupo: "P3", selected: false },
    { name: "Rodrigo Silva", nmec: "98080", cadeira: "BD", grupo: "P2", selected: false },
    { name: "Rodrigo Silva", nmec: "98080", cadeira: "BD", grupo: "TP1", selected: false },
    { name: "Tomas Oliveira", nmec: "97890", cadeira: "BD", grupo: "TP1", selected: false },
    { name: "Tomas Oliveira", nmec: "97890", cadeira: "BD", grupo: "P1", selected: false },
    { name: "Filipe Gonçalves", nmec: "98083", cadeira: "PDS", grupo: "TP1", selected: false },
    { name: "Eva Bartolomeu", nmec: "98513", cadeira: "PDS", grupo: "TP1", selected: false },
    { name: "Pedro Sobral", nmec: "92491", cadeira: "PDS", grupo: "TP1", selected: false },
    { name: "Filipe Gonçalves", nmec: "98083", cadeira: "PDS", grupo: "P3", selected: false },
    { name: "Eva Bartolomeu", nmec: "98513", cadeira: "PDS", grupo: "P3", selected: false },
    { name: "Pedro Sobral", nmec: "92491", cadeira: "PDS", grupo: "P3", selected: false },
    { name: "Rodrigo Silva", nmec: "98080", cadeira: "PDS", grupo: "P2", selected: false },
    { name: "Rodrigo Silva", nmec: "98080", cadeira: "PDS", grupo: "TP1", selected: false },
    { name: "Tomas Oliveira", nmec: "97890", cadeira: "PDS", grupo: "TP1", selected: false },
    { name: "Tomas Oliveira", nmec: "97890", cadeira: "PDS", grupo: "P1", selected: false }
  ]

  people_subgroups: any = [
    { name: "Filipe Gonçalves", nmec: "98083", cadeira: "BD", grupo: "P3", subgrupo: "G1", selected: false },
    { name: "Eva Bartolomeu", nmec: "98513", cadeira: "BD", grupo: "P3", subgrupo: "G1", selected: false },
    { name: "Pedro Sobral", nmec: "92491", cadeira: "BD", grupo: "P3", subgrupo: "G1", selected: false },
  ]

  eventos_groups: any = [
    { title: "ferias grupos TP1", startdate: "2021-06-09", enddate: "2021-06-14", starttime: "09:00", endtime: "10:00", reminder: "none", repetition: "Weakly", notes: "", type: "", cadeira: "IHC", grupo: "TP1" },
    { title: "ferias grupos P1", startdate: "2021-06-09", enddate: "2021-06-14", starttime: "09:00", endtime: "10:00", reminder: "none", repetition: "Weakly", notes: "", type: "", cadeira: "IHC", grupo: "P1" }
  ]

  eventos_subgroups: any = [
    { title: "ferias subgrupos", startdate: "2021-06-15", enddate: "2021-06-15", starttime: "09:00", endtime: "10:00", reminder: "none", repetition: "Weakly", notes: "", type: "", cadeira: "IHC", grupo: "P1", subgrupo: "G1" }
  ]

  subgroups: any = [
    { cadeira: "PDS", grupo: "P3", subgrupo: "G1", filter: false, selected: false },
    { cadeira: "PDS", grupo: "P3", subgrupo: "G2", filter: false, selected: false },
    { cadeira: "PDS", grupo: "P3", subgrupo: "G3", filter: false, selected: false },
    { cadeira: "PDS", grupo: "P3", subgrupo: "G4", filter: false, selected: false },
    { cadeira: "PDS", grupo: "P1", subgrupo: "G1", filter: false, selected: false },
    { cadeira: "PDS", grupo: "P1", subgrupo: "G2", filter: false, selected: false },
    { cadeira: "IHC", grupo: "P1", subgrupo: "G1", filter: false, selected: false },
    { cadeira: "IHC", grupo: "P1", subgrupo: "G2", filter: false, selected: false },
    { cadeira: "IHC", grupo: "P2", subgrupo: "G1", filter: false, selected: false },
  ]

  pessoas: any = [
    { name: "filipe", cadeira: "IHC", turma: "P3", grupo: "G2", selected: false },
    { name: "eva", cadeira: "IHC", turma: "P3", grupo: "G2", selected: false },
    { name: "pedro", cadeira: "IHC", turma: "P3", grupo: "G2", selected: false },
    { name: "rodrigo", cadeira: "IHC", turma: "P3", grupo: "G5", selected: false },
    { name: "tomas", cadeira: "IHC", turma: "P1", grupo: "G1", selected: false },
  ];
  cadeiras: any = [
    { cadeira: "IHC", turma: "P1", grupo: "G1", selected: false },
    { cadeira: "IHC", turma: "P1", grupo: "G2", selected: false },
    { cadeira: "IHC", turma: "P1", grupo: "G3", selected: false },
    { cadeira: "IHC", turma: "P1", grupo: "G4", selected: false },
    { cadeira: "PDS", turma: "P2", grupo: "G1", selected: false },
    { cadeira: "IHC", turma: "P2", grupo: "G2", selected: false },
    { cadeira: "BD", turma: "P2", grupo: "G3", selected: false },
    { cadeira: "IHC", turma: "P2", grupo: "G4", selected: false },
  ];

  usersList: any = [
    { email: "teacher@ua.pt", password: "12345" },
    { email: "student@ua.pt", password: "12345" },
  ];

  userOnline: any = [{ email: "" },
  ];

  data: string = "";
  course: string = "";
  public filter_group: boolean = false;
  public filter_subgroup: boolean = false;
  public groupFilter: any;
  public subgroupFilter: any;
  public cadeira: string = "";

  type: string = "";
  next_type: boolean = false;
  nextEventsetType(type: string) {
    this.type = type;
    this.next_type = true;
  }

  addToCart(product: any) {
    if (this.next_type)
      product.type = this.type
    this.items.push(product);
  }

  addToCartInGroup(product: any) {
    if (this.next_type)
      product.type = this.type
    product.cadeira = this.groupFilter.cadeira;
    product.grupo = this.groupFilter.grupo;
    this.eventos_groups.push(product)
    this.items.push(product);
  }

  addToCartInSubGroup(product: any) {
    if (this.next_type)
      product.type = this.type
    product.cadeira = this.subgroupFilter.cadeira;
    product.grupo = this.subgroupFilter.grupo;
    product.subgrupo = this.subgroupFilter.subgrupo;
    this.eventos_subgroups.push(product)
    this.items.push(product);
  }

  checkLogin(request: any) {
    let flag: boolean = false;
    for (let index = 0; index < this.usersList.length; index++) {
      const element = this.usersList[index];
      if (element.email === request.email) {
        if (element.password === request.password) {
          this.userOnline.push(element.email);
          flag = true;
        } else {
          alert("Login Failed")
        }
      }
    }
    if (flag == false) {
      alert("USER DON'T EXESTS");
    }
  }

  registerUser(request: any) {
    let flag: boolean = false;
    for (let index = 0; index < this.usersList.length; index++) {
      const element = this.usersList[index];
      if (element.email === request.email) {
        flag = true;
        break;
      }
    }
    if (flag == false) {
      this.usersList.push(request);
    }
  }

  getDisplayUser() {
    let nome: string;
    let email: any = this.getUserEmail(this.userOnline);
    console.log(email);

    if (email === "teacher@ua.pt") {
      nome = "Joana Silva, 90126";
      return nome;
    }
    if (email === "student@ua.pt") {
      nome = "João Sousa, 98345";
      return nome;
    } else {
      //default
      nome = "Joana Silva, 90126";
      return nome;
    }
  }

  getUserEmail(userOnline: any) {
    for (let index = 0; index < userOnline.length; index++) {
      const element = userOnline[index];
      return element.email;
    }
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

  getGroups() {
    return this.groups;
  }

  getSubGroups() {
    return this.subgroups;
  }

  getPeople_groups() {
    return this.people_groups;
  }

  getPeople_subgroups() {
    return this.people_subgroups;
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

  public group: string = "";

  setGroup(group: string) {
    this.group = group;
  }

  getGroup() {
    return this.group;
  }

  addGroup(array: any, nameGroup: string) {
    let tmp: any = array[0];
    this.groups.push({ cadeira: tmp.cadeira, grupo: nameGroup, filter: false, selected: false });
    for (let item of array) {
      this.people_groups.push(item);
    }
  }

  addSubGroup(array: any, nameSubroup: string) {

    let tmp: any = array[0];
    this.subgroups.push({ cadeira: tmp.cadeira, grupo: tmp.grupo, subgrupo: nameSubroup, filter: false, selected: false });
    for (let item of array) {
      this.people_subgroups.push(item);
    }
  }

  setSubGroupFilterTrue(cadeira: string, grupo: string, subgrupo: string) {
    this.filter_subgroup = true;
    this.filter_group = false;
    for (let index = 0; index < this.subgroups.length; index++) {
      const item = this.subgroups[index];
      if (item.grupo == grupo && item.cadeira == cadeira && item.subgrupo === subgrupo) {
        this.subgroups[index].filter = true;
        this.subgroupFilter = item;
      }
      else {
        this.subgroups[index].filter = false;
      }
    }
  }

  setFilterGroupTrue(cadeira: string, grupo: string) {
    this.filter_group = true;
    this.filter_subgroup = false;
    for (let index = 0; index < this.groups.length; index++) {
      const item = this.groups[index];
      if (item.grupo == grupo && item.cadeira == cadeira) {
        this.groups[index].filter = true;
        this.groupFilter = item;
      }
      else {
        this.groups[index].filter = false;
      }
    }
  }

  setFilterGroupFalse() {
    this.filter_group = false;
  }

  setFilterSubGroupFalse() {
    this.filter_subgroup = false;
  }
}
