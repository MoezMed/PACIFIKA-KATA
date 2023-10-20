import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared/shared.module';
import { ShellModule } from '../shell/shell.module';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
    let component: ProductsComponent;
    let fixture: ComponentFixture<ProductsComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductsComponent],
            imports: [SharedModule, ShellModule, HttpClientTestingModule, RouterTestingModule],
        }).compileComponents();
        fixture = TestBed.createComponent(ProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show products cards', () => {
        const products = require('../../assets/products.json');
        component.products = products;
        fixture.detectChanges();
        const productsCards = fixture.nativeElement.querySelectorAll('[data-test="product-card"]');
        expect(productsCards.length).toBe(3);
    });
});
