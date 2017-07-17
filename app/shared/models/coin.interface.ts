export interface Coin {
    ticker: {
        base: string;
        target: string;
        price: string;
        volume: string;
        change: string;
    },
    timestamp: number;
    success: boolean;
    error: string;
}