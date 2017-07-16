import { UIState, INITIAL_UI_STATE } from "../../shared/models/ui-state.interface";
import { Currency } from "../../shared/models/currency.interface";

export interface ApplicationState {
    uiState: UIState;
    currencies: Currency[];
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
    uiState: INITIAL_UI_STATE,
    currencies: []
};