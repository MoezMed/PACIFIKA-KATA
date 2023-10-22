import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from 'src/app/shared/models/product';
import {ProductsService} from '../../services/products.service';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
    @Input() product!: Product;
    @Output() productUpdated: EventEmitter<Product>  = new EventEmitter<Product>;

    valueQuantity: string = '';
    products: Product[] = [];
    constructor(private productService: ProductsService) {}

  /**
   * ngOnInit
   * method to get a new product list and valueuantity
   * @param product: new product added
   */
    ngOnInit(): void {
      this.products = this.productService.getProductList()
      this.valueQuantity = this.product.quantity > 0 ?  "Quantité:" + this.product.quantity : "Non disponible";
      this.product.NbreArticleAdded = 0;
    }

  /**
   * method to add a new product and set a nw product list
   * @param product: new product added
   */

    addQuantity(product: Product) {
      this.product.NbreArticleAdded ++;
      this.products.push(product);
      this.productService.setProductList(this.products);
      this.productUpdated.emit(product);
    }
}
