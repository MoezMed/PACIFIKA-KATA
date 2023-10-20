import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'backets',
    loadChildren: () => import('./backets/backets.module').then((m) => m.BacketsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
