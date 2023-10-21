import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MycurrencyPipe} from './pipes/mycurrency';
import {NumberFormatterPipe} from './pipes/numberFormatter';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent, MycurrencyPipe, NumberFormatterPipe],
  exports: [HeaderComponent, FooterComponent, MycurrencyPipe],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
  ]
})
export class SharedModule {
}
