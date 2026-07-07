import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { PizzaList } from "./pizza-list/pizza-list";

import { FormsModule } from '@angular/forms';
import { DoblelPizzas } from "./doblel-pizzas/doblel-pizzas";
import { Cart } from "./cart/cart";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLinkWithHref,HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})  
export class App {
  protected readonly title = signal('PizzasDobleL');
}
