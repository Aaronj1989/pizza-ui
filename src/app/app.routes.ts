import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { PizzamenuComponent } from './components/pizzamenu/pizzamenu.component';
import { OrderComponent } from './components/order/order.component';
import { WingsmenuComponent} from './components/wingsmenu/wingsmenu.component';
import {SidesmenuComponent} from './components/sidesmenu/sidesmenu.component';
import {DrinkmenuComponent} from'./components/drinkmenu/drinkmenu.component';
import {PizzabuilderComponent} from'./components/pizzabuilder/pizzabuilder.component';

export const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'menu/pizza', component: PizzamenuComponent},
{path: 'menu/wings', component: WingsmenuComponent},
{path: 'menu/sides', component: SidesmenuComponent},
{path: 'menu/drinks', component: DrinkmenuComponent},
{path: 'create-pizza', component: PizzabuilderComponent},
{path: 'order', component: OrderComponent}

]

export const AppRoutes = RouterModule.forRoot(routes);