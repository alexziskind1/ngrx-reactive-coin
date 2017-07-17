import { UIState, INITIAL_UI_STATE } from "../../shared/models/ui-state.interface";
import { Currency } from "../../shared/models/currency.interface";
import { INITIAL_CURRENCY_STATE, CurrencyState } from "../../shared/models/currency-state.interface";

export interface ApplicationState {
    uiState: UIState;
    currencyState: CurrencyState;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
    uiState: INITIAL_UI_STATE,
    currencyState: INITIAL_CURRENCY_STATE
};