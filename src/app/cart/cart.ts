import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaCart } from '../pizza-cart';
import { Pizza } from '../pizza-list/Pizza';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
})
export class Cart {

  cartList$: Observable<Pizza[]>;
  constructor(private cart: PizzaCart) { 
    this.cartList$ = this.cart.cartList.asObservable();
  }
}
