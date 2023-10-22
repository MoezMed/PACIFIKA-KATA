import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {
  }

  $productList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);


  getProductList () :Product[]{
    return this.$productList.getValue();
  }
  setProductList (newProducts: Product[]){
    return this.$productList.next(newProducts);
  }

  fetchAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('assets/products.json');
  }
}
