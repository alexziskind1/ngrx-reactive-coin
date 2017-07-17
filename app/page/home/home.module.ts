import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { HomeComponent } from './home.component';
import { CurrencyListModule } from "../../components/currency-list/currency-list.module";


@NgModule({
    imports: [CurrencyListModule, NativeScriptModule],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
