import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { CurrencyListModule } from "./components/currency-list/currency-list.module";
import { CurrencyService } from "./shared/services/currency.service";
import { Http } from "@angular/http";
import { StoreModule } from '@ngrx/store';
import { INITIAL_APPLICATION_STATE } from "./shared/models/application-state.interface";
import { currencyReducer } from "./shared/store/reducers/currency.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CurrencyEffects } from "./shared/store/effects/currency.effects";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        AppRoutingModule,
        CurrencyListModule,
        StoreModule.provideStore({ currencies: currencyReducer }, INITIAL_APPLICATION_STATE),
        EffectsModule.run(CurrencyEffects)
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        CurrencyService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
