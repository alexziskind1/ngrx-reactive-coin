import { INITIAL_CURRENCIES } from "../../shared/mocks/currency.mock";
import { Currency } from "../../shared/models/currency.interface";

export interface CurrencyState {
    currencyList: Currency[];
}

export const INITIAL_CURRENCY_STATE: CurrencyState = {
    currencyList: INITIAL_CURRENCIES
};