import { Component, Input, OnInit } from '@angular/core';
import {Product} from 'src/app/shared/models/product';
import {ProductsService} from '../../../products/services/products.service';

@Component({
    selector: 'app-product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit {
    @Input() product!: Product;
    constructor(private productService: ProductsService) {}

    ngOnInit(): void {

    }

    deleteAProduct(product: Product) {
        this.productService.deleteProduct(product);
    }

}
