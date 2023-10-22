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
  @Output() productUpdated: EventEmitter<Product>  = new EventEmitter<Product>;
  products: Product[] = [];

  constructor(private productService: ProductsService) {
  }

  /**
   * method ngOnInit
   * permet d'initialiser la liste des produits
   */
  ngOnInit(): void {
    this.products = this.productService.getProductList();
  }

  /**
   * method deleteProduct
   * permet de supprimer un produit de la la list et setter la nouvelle liste
   */
  deleteAProduct(product: Product) {
    const indexProductToDelete = this.products.findIndex(p => p.id !== product.id);
    this.products.splice(indexProductToDelete, 1);
    this.productService.setProductList(this.products);
    this.productUpdated.emit(product);
  }

}
