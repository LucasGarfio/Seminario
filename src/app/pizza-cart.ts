import { Injectable } from '@angular/core';
import { Pizza } from './pizza-list/Pizza';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class PizzaCart {
  private _cartList: Pizza[] = [];
  cartList: BehaviorSubject<Pizza[]> = new BehaviorSubject(this._cartList);

  addToCart(pizza: Pizza): boolean {
    if (!pizza || pizza.quantity <= 0) {
      return false;
    }
    let item: Pizza | undefined = this._cartList.find((v1) => v1.name === pizza.name);
    if (!item) {
      this._cartList.push({ ...pizza });
    } else {
      item.quantity += pizza.quantity;
    }
    this.cartList.next(this._cartList);
    return true;
  }
}
