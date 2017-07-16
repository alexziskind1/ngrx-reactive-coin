import { Component, OnInit } from '@angular/core';
import { INITIAL_CURRENCIES } from "../../shared/mocks/currency.mock";
import { Currency } from "../../shared/models/currency.interface";
import { CurrencyService } from "../../shared/services/currency.service";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../shared/models/application-state.interface";
import { LoadCurrencyListAction } from "../../shared/store/actions/currency.actions";

@Component({
    moduleId: module.id,
    selector: 'currency-list',
    templateUrl: 'currency-list.component.html'
})

export class CurrencyListComponent implements OnInit {
    currencyList$: Observable<Currency[]>;
    constructor(private store: Store<ApplicationState>) { }

    ngOnInit() {
        this.currencyList$ = this.store.select(store => store.currencies);

        this.store.dispatch(new LoadCurrencyListAction());
    }
}