import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { DetailComponent } from './detail.component';
import { CurrencyDetailModule } from "../../components/currency-detail/currency-detail.module";


@NgModule({
    imports: [CurrencyDetailModule, NativeScriptModule],
    exports: [],
    declarations: [DetailComponent],
    providers: [],
})
export class DetailModule { }
