import { TestBed } from '@angular/core/testing';
import { ShellComponent } from '../shell.component';

import { ShellService } from './shell.service';

describe('ShellService', () => {
    let service: ShellService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ShellService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('childRoutes', () => {
        it('should create routes as children of shell', () => {
            // Arrange
            const testRoutes = [{ path: 'test' }];

            // Act
            const result = ShellService.childRoutes(testRoutes);

            // Assert
            expect(result.path).toBe('');
            expect(result.children).toBe(testRoutes);
            expect(result.component).toBe(ShellComponent);
        });
    });
});
