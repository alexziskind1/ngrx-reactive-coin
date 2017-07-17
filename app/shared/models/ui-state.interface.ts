//import { Currency } from "../../shared/models/currency.interface";
import { INITIAL_CURRENCIES } from "../../shared/mocks/currency.mock";
import { Coin } from "../../shared/models/coin.interface";

export interface UIState {
    loading: boolean;
    //currencies: Currency[];
    selectedCurrency: Coin;
}

export const INITIAL_UI_STATE: UIState = {
    loading: false,
    selectedCurrency: null
};