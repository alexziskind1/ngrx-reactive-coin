//import { Currency } from "../../shared/models/currency.interface";
import { INITIAL_CURRENCIES } from "../../shared/mocks/currency.mock";

export interface UIState {
    loading: boolean;
    //currencies: Currency[];
    selectedCurrency: {};
}

export const INITIAL_UI_STATE: UIState = {
    loading: false,
    //currencies: INITIAL_CURRENCIES,
    selectedCurrency: {}
};