import { Injectable } from '@angular/core';
import { Actions, Effect } from "@ngrx/effects";
import { UIStateService } from "../../../shared/services/ui-state.service";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { CoinDataLoadedAction, LOAD_COIN_DATA_ACTION } from "../../../shared/store/actions/ui-state.actions";

@Injectable()
export class UIStateEffects {

    constructor(
        private actions$: Actions,
        private uiStateService: UIStateService
    ) { }

    @Effect() getCoinPrice$: Observable<Action> = this.actions$
        .ofType(LOAD_COIN_DATA_ACTION)
        .switchMap(action => this.uiStateService.getCoinPrice(action.payload))
        .map(res => new CoinDataLoadedAction(res));
}