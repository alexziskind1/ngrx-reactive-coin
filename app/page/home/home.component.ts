import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Currency } from "../../shared/models/currency.interface";
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../shared/models/application-state.interface";
import { Router } from "@angular/router";
import { LoadCurrencyListAction } from "../../shared/store/actions/currency.actions";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currencyList$: Observable<Currency[]>;
    currencyList: Currency[];

    constructor(private store: Store<ApplicationState>, private router: Router) { }

    ngOnInit() {
        this.currencyList$ = this.store.select(store => {
            return store.currencyState.currencyList;
        });
        //.subscribe(currencies => this.currencyList = currencies);

        this.store.dispatch(new LoadCurrencyListAction());
    }

    selectedCurrency(currency: Currency) {
        //const selectedCurrency = this.currencyList[args.index];
        this.router.navigate(['/currency', currency.code]);
    }
}