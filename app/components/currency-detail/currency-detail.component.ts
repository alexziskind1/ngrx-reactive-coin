import { Component, OnInit } from '@angular/core';
import { Router, Params, Route, ActivatedRoute } from "@angular/router";
import { PageRoute } from "nativescript-angular";
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../shared/models/application-state.interface";
import { LoadCoinDataAction } from "../../shared/store/actions/ui-state.actions";
import { Observable } from "rxjs/Observable";
import { Coin } from "../../shared/models/coin.interface";

@Component({
    moduleId: module.id,
    selector: 'currency-detail',
    templateUrl: 'currency-detail.component.html',
    styleUrls: ['currency-detail.component.css']
})

export class CurrencyDetailComponent implements OnInit {

    selectedCurrency$: Observable<Coin>;
    isLoading: boolean = false;

    constructor(
        private store: Store<ApplicationState>,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.forEach(param => {
            this.store.dispatch(new LoadCoinDataAction(param.code.toString()));
        });

        this.store.select(store => store.uiState.selectedCurrency)
            .subscribe(console.log);


        this.selectedCurrency$ = this.store.select(store =>
            store.uiState.selectedCurrency
        );

        this.store.select(store => store.uiState.loading)
            .subscribe(loading => this.isLoading = loading);

        //this.route.activatedRoute.switchMap(actRoute => actRoute.params)
        /*
            .switchMap(actRoute => actRoute.params)
            .forEach(code =>
                this.store.dispatch(new LoadCoinDataAction(code.toString())));
    */
    }
}