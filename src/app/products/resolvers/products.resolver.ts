import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../services/products.service';
import {Product} from '../../shared/models/product';

@Injectable({
    providedIn: 'root',
})
export class ProductsResolver implements Resolve<Product[]> {
    constructor(private productsService: ProductsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
        return this.productsService.fetchAll();
    }
}
