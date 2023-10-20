import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShellModule } from 'src/app/shell/shell.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductTableComponent } from './product-table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalService } from 'src/app/shared/services/modal.service';

describe('BasketCardComponent', () => {
    const el = (selector: string) => fixture.nativeElement.querySelector(selector);
    let component: ProductTableComponent;
    let fixture: ComponentFixture<ProductTableComponent>;
    let modalService: ModalService;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductTableComponent],
            imports: [SharedModule, ShellModule, HttpClientTestingModule, RouterTestingModule],
        }).compileComponents();
        modalService = TestBed.inject(ModalService);
        fixture = TestBed.createComponent(ProductTableComponent);
        component = fixture.componentInstance;
        const products = require('../../../../assets/products.json');
        component.product = products[0];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
