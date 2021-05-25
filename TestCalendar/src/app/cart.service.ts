import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any = [];
  data: string = "";

  addToCart(product: any) {
    product = {title: product.title, date: product.startdate}
    this.items.push(product);
    alert(product.title);
  }

  getItems() {
    return this.items;
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
}