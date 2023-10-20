import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellService } from '../shell/services/shell.service';
import { ProductsComponent } from './products.component';
import { ProductsResolver } from './resolvers/products.resolver';

const routes: Routes = [
    ShellService.childRoutes([
        {
            path: '',
            component: ProductsComponent,
            resolve: {
              products: ProductsResolver,
            },
        },
    ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class ProductsRoutingModule {}
