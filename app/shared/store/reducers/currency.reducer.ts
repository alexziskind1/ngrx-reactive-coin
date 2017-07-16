
import { ApplicationState } from "../../../shared/models/application-state.interface";
import { Action } from "@ngrx/store";
import { LOAD_CURRENCY_LIST, CURRENCY_LIST_LOADED } from "../../../shared/store/actions/currency.actions";
import { INITIAL_CURRENCIES } from "../../../shared/mocks/currency.mock";
export function currencyReducer(state: ApplicationState, action: Action) {
    switch (action.type) {
        case LOAD_CURRENCY_LIST:
            const newState = Object.assign({}, state);
            newState.currencies = INITIAL_CURRENCIES;
            return newState.currencies;
        case CURRENCY_LIST_LOADED:
            const currencyState = Object.assign({}, state);
            currencyState.currencies = action.payload;
            return currencyState.currencies;
        default:
            return state;
    }
}