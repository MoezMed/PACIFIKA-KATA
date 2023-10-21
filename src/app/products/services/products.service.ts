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

  productList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);


  getProductList () :Product[]{
    return this.productList.getValue();
  }
  setProductList (newProducts: Product[]){
    return this.productList.next(newProducts);
  }

  fetchAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('assets/products.json');
  }

  addQuantity(product: Product): Observable<void> {
    return this.httpClient.post<void>('assets/products.json', product);
  }

  deleteProduct(product: Product): Observable<void> {
    // this.productList.next(this.productList.getValue().filter(p => p.id !== product.id));
    return this.httpClient.post<void>('assets/products.json', product);
  }
}
