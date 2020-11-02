import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from'@angular/forms';

import {AppRoutes} from './app.routes'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { PizzaComponent } from './components/pizza/pizza.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PizzamenuComponent } from './components/pizzamenu/pizzamenu.component';
import { CurrencyPipe } from '@angular/common';
import { OrderComponent } from './components/order/order.component';
import { WingsComponent } from './components/wings/wings.component';
import { WingsmenuComponent } from './components/wingsmenu/wingsmenu.component';
import { SidesmenuComponent } from './components/sidesmenu/sidesmenu.component';
import { SideComponent } from './components/side/side.component';
import { DrinkmenuComponent } from './components/drinkmenu/drinkmenu.component';
import { DrinkComponent } from './components/drink/drink.component';
import { PizzabuilderComponent } from './components/pizzabuilder/pizzabuilder.component';
import { ToppingComponent } from './components/topping/topping.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromotionComponent,
    MenuComponent,
    PizzaComponent,
    PizzamenuComponent,
    OrderComponent,
    WingsComponent,
    WingsmenuComponent,
    SidesmenuComponent,
    SideComponent,
    DrinkmenuComponent,
    DrinkComponent,
    PizzabuilderComponent,
    ToppingComponent,
 
     
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [HttpClient, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
