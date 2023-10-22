import { ComponentFixture, TestBed } from '@angular/core/testing';
import {BacketsComponent} from './backets.component';


describe('BacketsComponent', () => {
    let component: BacketsComponent;
    let fixture: ComponentFixture<BacketsComponent>;
    const el = (selector: string) => fixture.nativeElement.querySelector(selector);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BacketsComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(BacketsComponent);
        const baskets = require('../../assets/products.json');
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
