import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Currency } from "../../shared/models/currency.interface";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CurrencyService {

    private baseUrl: string = 'https://api.cryptonator.com/api';
    constructor(private http: Http) { }

    getCurrencies(): Observable<Currency[]> {
        return this.http.get(`${this.baseUrl}/currencies`)
            .map(res => res.json())
            .do(console.log)
            .map(res => res.rows);
    }
}