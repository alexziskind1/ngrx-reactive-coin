import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { CurrencyListComponent } from './currency-list.component';

@NgModule({
    imports: [NativeScriptModule],
    exports: [CurrencyListComponent],
    declarations: [CurrencyListComponent],
    providers: [],
})
export class CurrencyListModule { }
