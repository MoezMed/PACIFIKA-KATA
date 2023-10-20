import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { ShellModule } from '../shell/shell.module';
import { ProductCardComponent } from './components/products-card/product-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, ShellModule, ProductsRoutingModule, ReactiveFormsModule, FormsModule],
  declarations: [ProductsComponent, ProductCardComponent],
})
export class ProductsModule {}
