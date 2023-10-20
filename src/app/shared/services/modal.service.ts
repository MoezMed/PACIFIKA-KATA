import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    private isOpened$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private data$: BehaviorSubject<any> = new BehaviorSubject(undefined);

    get isOpened(): Observable<boolean> {
        return this.isOpened$.asObservable();
    }

    open() {
        this.isOpened$.next(true);
    }

    close() {
        this.isOpened$.next(false);
    }

    set data(data: any) {
        this.data$.next(data);
    }

    get data(): Observable<any> {
        return this.data$.asObservable();
    }
}
