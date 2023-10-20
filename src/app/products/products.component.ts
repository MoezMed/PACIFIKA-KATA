import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../shared/models/product';
import {ProductsService} from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService,
              public router: Router) {
  }

  products: Product[] = [];
  categories: string[] = [];
  productsByCategory: Product[] = [];

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({products}) => {
      this.products = products;
      this.productsService.setProductList(this.products);
      this.setCategotyList();
      this.calculateTaxes();
    });

  }

  filterProductByCategory($event: Event) {
    const category = ($event.target as HTMLSelectElement).value;
    this.productsByCategory = this.products.filter(product => product.category === category);
  }

  private setCategotyList() {
    if (this.products.length > 0) {
      this.products.map(product => {
        if (!this.categories.includes(product.category)) {
          this.categories.push(product.category);
        }
      });
    }
  }

  private calculateTaxes() {
    this.products.forEach(product => {
      let taxAdded = 0;
      if(product.isImported){
       taxAdded = product.price * 0.05;
      }
      switch (product.category) {
        case 'Food' || 'Medecine':
          product.taxes = taxAdded;
          break;
        case 'Books': {
          product.taxes = product.price * 0.1 + taxAdded;
          break;
        }
        default: {
          product.taxes = product.price * 0.2 + taxAdded;

        }
      }
      product.priceTTC = product.price + product.taxes;
    });
  }
}
