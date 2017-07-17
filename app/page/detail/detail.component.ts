import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../shared/models/application-state.interface";
import { ActivatedRoute } from "@angular/router";
import { LoadCoinDataAction } from "../../shared/store/actions/ui-state.actions";
import { Coin } from "../../shared/models/coin.interface";

@Component({
    moduleId: module.id,
    selector: 'detail',
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {

    selectedCurrency$: Observable<Coin>;
    isLoading$: Observable<boolean>;

    constructor(
        private store: Store<ApplicationState>,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.selectedCurrency$ = this.store.select(store =>
            store.uiState.selectedCurrency
        );

        this.isLoading$ = this.store.select(store => store.uiState.loading);


        this.route.params.forEach(param => {
            this.store.dispatch(new LoadCoinDataAction(param.code.toString()));
        });
    }
}