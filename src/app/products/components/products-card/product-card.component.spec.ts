import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShellModule } from 'src/app/shell/shell.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductCardComponent } from './product-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalService } from 'src/app/shared/services/modal.service';

describe('BasketCardComponent', () => {
    const el = (selector: string) => fixture.nativeElement.querySelector(selector);
    let component: ProductCardComponent;
    let fixture: ComponentFixture<ProductCardComponent>;
    let modalService: ModalService;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductCardComponent],
            imports: [SharedModule, ShellModule, HttpClientTestingModule, RouterTestingModule],
        }).compileComponents();
        modalService = TestBed.inject(ModalService);
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

    it('should open invoice Modal', () => {
        const spy = jasmine.createSpy('spy');
        spyOn(modalService, 'open');
        const orderButton = el('[data-test="order-btn"]');
        orderButton.click();
        fixture.detectChanges();

        modalService.data.subscribe(spy);

        expect(modalService.open).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(component.product);
    });
});
