import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Coin } from '../../shared/models/coin.interface';

@Injectable()
export class UIStateService {

    private baseUrl: string = 'https://api.cryptonator.com/api';
    constructor(private http: Http) { }

    getCoinPrice(currencyCode: string): Observable<Coin> {
        return this.http.get(`${this.baseUrl}/ticker/${currencyCode}-usd`)
            .map(res => res.json());
    }
}