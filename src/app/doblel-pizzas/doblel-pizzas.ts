import { Component } from '@angular/core';
import { Cart } from "../cart/cart";
import { PizzaList } from "../pizza-list/pizza-list";

@Component({
  selector: 'app-doblel-pizzas',
  imports: [PizzaList, Cart],
  templateUrl: './doblel-pizzas.html',
  styleUrls: ['./doblel-pizzas.scss'],
})
export class DoblelPizzas {
}

