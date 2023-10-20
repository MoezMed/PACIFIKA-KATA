import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
    let component: ShellComponent;
    let fixture: ComponentFixture<ShellComponent>;
    const el = (selector: string) => fixture.nativeElement.querySelector(selector);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ShellComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ShellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show header', () => {
        const headerContent = el('[data-test="app-header"]').textContent;
        expect(headerContent).toBeDefined();
    });

    it('should show common content', () => {
        const commonContent = el('[data-test="app-common-content"]').textContent;
        expect(commonContent).toBeDefined();
    });

    it('should show footer', () => {
        const footerContent = el('[data-test="app-footer"]').textContent;
        expect(footerContent).toBeDefined();
    });
});
