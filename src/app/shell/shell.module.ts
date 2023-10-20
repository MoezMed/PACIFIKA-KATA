import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {MycurrencyPipe} from '../shared/pipes/mycurrency';

@NgModule({
    imports: [CommonModule, RouterModule, SharedModule],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class ShellModule {}
