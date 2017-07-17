
import { ApplicationState } from "../../../shared/models/application-state.interface";
import { Action } from "@ngrx/store";
import { INITIAL_CURRENCIES } from "../../../shared/mocks/currency.mock";
import { CurrencyState, INITIAL_CURRENCY_STATE } from "../../../shared/models/currency-state.interface";
import { COIN_DATA_LOADED_ACTION, LOAD_COIN_DATA_ACTION } from "../../../shared/store/actions/ui-state.actions";
import { UIState, INITIAL_UI_STATE } from "../../../shared/models/ui-state.interface";

export function uiStateReducer(
    state: UIState = INITIAL_UI_STATE,
    action: Action): UIState {

    switch (action.type) {
        case LOAD_COIN_DATA_ACTION:
            const loadingState = Object.assign({}, state);
            loadingState.loading = true;
            return loadingState;

        case COIN_DATA_LOADED_ACTION:
            const newSelectedCurrency = Object.assign({}, state);
            newSelectedCurrency.loading = false;
            newSelectedCurrency.selectedCurrency = action.payload;
            return newSelectedCurrency;

        default:
            return state;
    }
}