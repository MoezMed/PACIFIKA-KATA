import { Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { ShellComponent } from '../shell.component';

/**
 * Provides helper methods to create routes.
 */
@Injectable({
    providedIn: 'root',
})
export class ShellService {
    constructor() {}

    /**
     * Creates routes using the shell component and authentication.
     * @param routes The routes to add.
     * @return The new route using shell as the base.
     */
    static childRoutes(routes: Routes): Route {
        return {
            path: '',
            component: ShellComponent,
            children: routes,
            canActivate: [],
        };
    }
}
