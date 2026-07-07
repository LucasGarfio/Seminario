import { Routes } from '@angular/router';
import { DoblelPizzas } from './doblel-pizzas/doblel-pizzas';
import { About } from './about/about';

export const routes: Routes = [
    { path: '', redirectTo: 'pizzas', pathMatch: 'full' },
    { path: 'pizzas', component: DoblelPizzas },
    { path: 'about', component: About },


];
