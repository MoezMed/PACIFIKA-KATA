import { Component, Input, OnInit } from '@angular/core';
import {Product} from 'src/app/shared/models/product';
import {ProductsService} from '../../services/products.service';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
    @Input() product!: Product;
    valueQuantity: string = '';
    constructor(private productService: ProductsService) {}

    ngOnInit(): void {
      this.valueQuantity = this.product.quantity > 0 ?  "Quantité:" + this.product.quantity : "Non disponible";
    }

    addQuantity(product: Product) {
      this.productService.addQuantity(product);
    }
}
