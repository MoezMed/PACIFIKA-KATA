import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacketsRoutingModule } from './backets-routing.module';
import { SharedModule } from '../shared/shared.module';
import {ProductTableComponent} from './components/product-table/product-table.component';
import {BacketsComponent} from './backets.component';

@NgModule({
    imports: [CommonModule, BacketsRoutingModule, SharedModule],
    declarations: [ProductTableComponent, BacketsComponent],
})
export class BacketsModule {}
