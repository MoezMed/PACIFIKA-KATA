import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    const el = (selector: string) => fixture.nativeElement.querySelector(selector);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
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

    it('should show title', () => {
        const titleContent = el('[data-test="app-title"]').textContent;
        expect(titleContent).toBeDefined();
    });
});
