import {LOCALE_ID, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellService } from '../shell/services/shell.service';
import {BacketsComponent} from './backets.component';
import {ProductsResolver} from '../products/resolvers/products.resolver';

const routes: Routes = [
    ShellService.childRoutes([
      {
        path: '',
        component: BacketsComponent,
        resolve: {
          baskets: ProductsResolver,
        },
      },
    ]),
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ]
})
export class BacketsRoutingModule {}
