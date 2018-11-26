import { Injectable } from '@angular/core';
import {companyDetail, marketDetail} from "../model/companyDetail";
import {forkJoin, Observable, ObservableInput} from "rxjs/index";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private _http : HttpClient) { }

getStockData(symbol:string) : Observable<any[]>{
  let response1 = this.getCompanyDetail(symbol);
  let response2 = this.getCompanyLogoUrl(symbol);
  let response3 = this.getMarketData(symbol);
  return forkJoin([response1, response2, response3]);
}

  getMarketData(symbol:string) : Observable<marketDetail>{
    const params = new HttpParams().set('symbols', symbol);
    return this._http.get<marketDetail>('https://api.iextrading.com/1.0/tops',{params});
  }

  getCompanyDetail(symbol:string): Observable<companyDetail>{
    const url = `https://api.iextrading.com/1.0/stock/${symbol}/company`;
    return this._http.get<companyDetail>(url);
  }

  getCompanyLogoUrl(symbol:string) : Observable<any>{
    const url = `https://api.iextrading.com/1.0/stock/${symbol}/logo`;
    return this._http.get<any>(url);
  }
}
