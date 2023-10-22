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
  title = 'Kata Products';

  ngOnInit(): void {
    //toDo recupérer la nouvelle Liste des products

    this.activatedRoute.data.subscribe(({products}) => {
      if (this.productsService.getProductList().length > 0) {
        this.products = this.productsService.getProductList();
      } else {
        this.products = products;
      }
      this.productsService.setProductList(this.products);
      this.setCategotyList();
      this.calculateTaxes();
    });

  }

  /**
   * method to filter products by category
   * @param $event value of category
   */

  filterProductByCategory($event: Event) {
    const category = ($event.target as HTMLSelectElement).value;
    this.productsByCategory = this.products.filter(product => product.category === category);
  }

  /**
   * method to set the list of categories (distinct
   */
  private setCategotyList() {
    if (this.products.length > 0) {
      this.products.map(product => {
        if (!this.categories.includes(product.category)) {
          this.categories.push(product.category);
        }
      });
    }
  }
  /**
   * method to calculate taxes based on some parameters
   */
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
      //Arround of taxes
      product.taxes = Math.round(product.taxes * 20) / 20.0;
      product.priceTTC = product.price + product.taxes;
    });
  }
}
