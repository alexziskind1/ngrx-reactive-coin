
import { ApplicationState } from "../../../shared/models/application-state.interface";
import { Action } from "@ngrx/store";
import { LOAD_CURRENCY_LIST, CURRENCY_LIST_LOADED } from "../../../shared/store/actions/currency.actions";
import { INITIAL_CURRENCIES } from "../../../shared/mocks/currency.mock";
import { CurrencyState, INITIAL_CURRENCY_STATE } from "../../../shared/models/currency-state.interface";

export function currencyReducer(
    state: CurrencyState = INITIAL_CURRENCY_STATE,
    action: Action): CurrencyState {

    switch (action.type) {
        case LOAD_CURRENCY_LIST:
            const newState = Object.assign({}, state);
            //newState.currencies = INITIAL_CURRENCIES;
            return newState;

        case CURRENCY_LIST_LOADED:
            const currencyState = Object.assign({}, state);
            currencyState.currencyList = action.payload;
            return currencyState;

        default:
            return state;
    }
}