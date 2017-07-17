import { Component, OnInit, OnDestroy } from '@angular/core';
import { INITIAL_CURRENCIES } from "../../shared/mocks/currency.mock";
import { Currency } from "../../shared/models/currency.interface";
import { CurrencyService } from "../../shared/services/currency.service";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../shared/models/application-state.interface";
import { LoadCurrencyListAction } from "../../shared/store/actions/currency.actions";
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'currency-list',
    templateUrl: 'currency-list.component.html'
})

export class CurrencyListComponent implements OnInit, OnDestroy {
    //currencyList$: Observable<Currency[]>;
    currencyList$: Subscription;
    currencyList: Currency[];
    constructor(private store: Store<ApplicationState>, private router: Router) { }

    ngOnInit() {
        this.currencyList$ = this.store.select(store => {
            return store.currencyState.currencyList;
        })
            .subscribe(currencies => this.currencyList = currencies);

        this.store.dispatch(new LoadCurrencyListAction());
    }

    ngOnDestroy() {
        this.currencyList$.unsubscribe();
    }

    onItemTap(args) {
        const selectedCurrency = this.currencyList[args.index];
        this.router.navigate(['/currency', selectedCurrency.code]);
    }
}