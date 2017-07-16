import { Currency } from "../models/currency.interface";

export const INITIAL_CURRENCIES: Currency[] = [
    {
        code: 'BTC',
        name: 'Bitcoin',
        statuses: ['primary', 'secondary']
    },
    {
        code: 'ETH',
        name: 'Ethereum',
        statuses: ['primary', 'secondary']
    },
    {
        code: 'DOGE',
        name: 'Dogecoin',
        statuses: ['primary']
    }
];