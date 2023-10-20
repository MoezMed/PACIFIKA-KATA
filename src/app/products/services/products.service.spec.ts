import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';
import { ShellModule } from '../../shell/shell.module';

import { ProductsService } from './products.service';

describe('BasketsService', () => {
    let basketsService: ProductsService;
    let httpClient: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, ShellModule, HttpClientTestingModule, RouterTestingModule],
        });
        basketsService = TestBed.inject(ProductsService);
        httpClient = TestBed.get(HttpClient);
    });

    it('should be created', () => {
        expect(basketsService).toBeTruthy();
    });

    it('should be fetch All baskets', fakeAsync(() => {
        const spy = jasmine.createSpy('spy');

        const baskets = require('../../../assets/products.json');

        spyOn(httpClient, 'get').and.returnValue(of(baskets));

        basketsService.fetchAll().subscribe(spy);

        tick();

        expect(httpClient.get).toHaveBeenCalledWith('assets/products.json');
        expect(spy).toHaveBeenCalledWith(baskets);
    }));
});
