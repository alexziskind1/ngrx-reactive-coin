import { Injectable } from '@angular/core';
import { CurrencyService } from "../../../shared/services/currency.service";
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { LOAD_CURRENCY_LIST, CurrencyListLoadedAction } from "../../../shared/store/actions/currency.actions";

@Injectable()
export class CurrencyEffects {

    constructor(private actions$: Actions, private currencyService: CurrencyService) { }

    @Effect() loadCurrencyListEffect: Observable<Action> = this.actions$
        .ofType(LOAD_CURRENCY_LIST)
        .switchMap(action => this.currencyService.getCurrencies())
        .map(res => new CurrencyListLoadedAction(res));

}