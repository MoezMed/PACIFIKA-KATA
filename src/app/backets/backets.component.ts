import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../shared/models/product';
import {ProductsService} from '../products/services/products.service';

@Component({
    selector: 'app-backets',
    templateUrl: './backets.component.html',
    styleUrls: ['./backets.component.scss'],
})
export class BacketsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService) {}
  products: Product[] = [];
  TotalTaxes = 0;
  TotalPrice = 0;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ products }) => {
      this.products = products;
    });
    this.products = this.productsService.getProductList();

  this.calculateTotalesTaxesAndPrices();
  }

  private calculateTotalesTaxesAndPrices() {
    this.TotalTaxes = this.products.reduce((total, product) => total + product.taxes, 0);
    this.TotalPrice = this.products.reduce((total, product) => total + product.price, 0);
  }
}
