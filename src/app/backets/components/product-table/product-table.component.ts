import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from 'src/app/shared/models/product';
import {ProductsService} from '../../../products/services/products.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit {
  @Input() product!: Product;
  @Output() productsUpdated: EventEmitter<Product[]> = new EventEmitter<Product[]>;
  products: Product[] = [];

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProductList();
  }

  deleteAProduct(product: Product) {
    const indexProductToDelete = this.products.findIndex(p => p.id !== product.id);
    this.products.splice(indexProductToDelete, 1);
    this.productService.setProductList(this.products);
    this.productsUpdated.emit(this.products);
  }

}
