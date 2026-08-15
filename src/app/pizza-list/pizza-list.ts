import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pizza } from './Pizza';
import { InputInteger } from "../input-integer/input-integer";
import { PizzaCart } from '../pizza-cart';
import { PizzaData } from '../pizza-data';

@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [CommonModule, FormsModule, InputInteger],
  templateUrl: './pizza-list.html',
  styleUrls: ['./pizza-list.scss'],
})
export class PizzaList {


pizzas = signal<Pizza[]>([]);

constructor(
  private cart: PizzaCart,
  private PizzaData: PizzaData) { 
   
}

  ngOnInit(): void {
  // reset cart when entering the pizza list (home)
  this.cart.clear();

  this.PizzaData.getAll()
  .subscribe(pizzas => this.pizzas.set(pizzas));  
  }

addToCart(pizza: Pizza): void {
  const added = this.cart.addToCart(pizza);
  if (added) {
    pizza.stock -= pizza.quantity;
    pizza.quantity = 0;
  } else {
    alert('Ingrese una cantidad mayor a 0 para comprar');
  }
  }


maxReached(m: string) {
  alert(m);
}

}

