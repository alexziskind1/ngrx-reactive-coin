import { Action } from "@ngrx/store";
import { Currency } from "../../../shared/models/currency.interface";

export const LOAD_CURRENCY_LIST = '[Currency] LOAD_CURRENCY_LIST';
export const CURRENCY_LIST_LOADED = '[Currency] CURRENCY_LIST_LOADED';
export class LoadCurrencyListAction implements Action {
    type = LOAD_CURRENCY_LIST;
    constructor() { }
}

export class CurrencyListLoadedAction implements Action {
    type = CURRENCY_LIST_LOADED;
    constructor(public payload: Currency[]) { }
}