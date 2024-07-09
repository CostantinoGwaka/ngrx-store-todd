import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// // components
// import * as fromComponents from './components';


// services
import * as fromServices from './services';
import { PizzaDisplayComponent, PizzaFormComponent, PizzaItemComponent, PizzaToppingsComponent } from './components';
import { ProductItemComponent, ProductsComponent } from './containers';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    component: ProductItemComponent,
  },
  {
    path: 'new',
    component: ProductItemComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [
    fromServices.services
  ],
  declarations: [
    ProductsComponent, 
    ProductItemComponent, 
    PizzaItemComponent,
    PizzaFormComponent,
    PizzaDisplayComponent,
    PizzaToppingsComponent,
  ],
  exports: [
    ProductsComponent, 
    ProductItemComponent, 
    PizzaItemComponent,
    PizzaFormComponent,
    PizzaDisplayComponent,
    PizzaToppingsComponent,
  ],
})
export class ProductsModule {}
