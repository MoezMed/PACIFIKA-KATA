import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    const el = (selector: string) => fixture.nativeElement.querySelector(selector);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FooterComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show logo', () => {
        const logoContent = el('[data-test="app-logo"]').textContent;
        expect(logoContent).toBeDefined();
    });

    it('should show copyright', () => {
        const titleContent = el('[data-test="app-copyright"]').textContent;
        expect(titleContent).toBeDefined();
    });
});
