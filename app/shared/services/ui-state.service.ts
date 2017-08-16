import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Coin } from '../../shared/models/coin.interface';

@Injectable()
export class UIStateService {

    private baseUrl: string = 'https://api.cryptonator.com/api';
    //private baseUrl: string = 'https://tns-fn-app1.azurewebsites.net/api';

    constructor(private http: Http) { }

    getCoinPrice(currencyCode: string): Observable<Coin> {

        return this.http.get(`${this.baseUrl}/ticker/${currencyCode}-usd`)
            .map(res => res.json());

        //return this.http.get(`${this.baseUrl}/HttpTriggerJS1?code=${currencyCode}`)
        //    .map(res => {
        //        return res.json();
        //    });

    }
}