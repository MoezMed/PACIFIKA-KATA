import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShellModule } from 'src/app/shell/shell.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductCardComponent } from './product-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BasketCardComponent', () => {
    const el = (selector: string) => fixture.nativeElement.querySelector(selector);
    let component: ProductCardComponent;
    let fixture: ComponentFixture<ProductCardComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductCardComponent],
            imports: [SharedModule, ShellModule, HttpClientTestingModule, RouterTestingModule],
        }).compileComponents();
        fixture = TestBed.createComponent(ProductCardComponent);
        component = fixture.componentInstance;
        const products = require('../../../../assets/products.json');
        component.product = products[0];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show cart logo', () => {
        const cartLogo = el('[data-test="card-logo"]').textContent;
        expect(cartLogo).toBeDefined();
    });

    it('should show card title', () => {
        const title = el('[data-test="card-title"]').textContent;
        expect(title).toBeDefined();
        expect(title).toContain('Basket 1');
    });

    it('should show products', () => {
        const products = fixture.nativeElement.querySelectorAll('[data-test="cart-product"]');
        expect(products.length).toBe(3);
    });

    it('should show order button', () => {
        const orderButton = el('[data-test="order-btn"]').textContent;
        expect(orderButton).toBeDefined();
    });

});
