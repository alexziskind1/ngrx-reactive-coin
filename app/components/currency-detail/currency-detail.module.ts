import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { CurrencyDetailComponent } from './currency-detail.component';

@NgModule({
    imports: [NativeScriptModule],
    exports: [CurrencyDetailComponent],
    declarations: [CurrencyDetailComponent],
    providers: [],
})
export class CurrencyDetailModule { }
