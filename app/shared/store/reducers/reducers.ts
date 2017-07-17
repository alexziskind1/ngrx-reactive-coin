import { currencyReducer } from "./currency.reducer";
import { uiStateReducer } from "./ui-state.reducer";

export const rootReducer = {
    uiState: uiStateReducer,
    currencyState: currencyReducer
};