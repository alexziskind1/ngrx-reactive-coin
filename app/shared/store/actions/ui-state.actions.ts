import { Action } from "@ngrx/store";
import { Coin } from "../../../shared/models/coin.interface";


export const LOAD_COIN_DATA_ACTION = '[UI_STATE] LOAD_COIN_DATA_ACTION';
export const COIN_DATA_LOADED_ACTION = '[UI-STATE] COIN_DATA_LOADED_ACTION';

export class LoadCoinDataAction implements Action {
    type = LOAD_COIN_DATA_ACTION;
    constructor(public payload: string) { }
}

export class CoinDataLoadedAction implements Action {
    type = COIN_DATA_LOADED_ACTION;
    constructor(public payload: Coin) { }
}