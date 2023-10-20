import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ModalService } from './modal.service';

describe('ModalService', () => {
    let modalService: ModalService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        modalService = TestBed.inject(ModalService);
    });

    it('should be created', () => {
        expect(modalService).toBeTruthy();
    });

    it('should open modal', fakeAsync(() => {
        modalService.open();
        modalService.isOpened.subscribe((isOpened) => {
            expect(isOpened).toBeTrue();
        });
    }));

    it('should close modal', fakeAsync(() => {
        modalService.close();
        modalService.isOpened.subscribe((isOpened) => {
            expect(isOpened).toBeFalse();
        });
    }));
});
