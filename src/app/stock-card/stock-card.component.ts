import { Component, OnInit, Input } from '@angular/core';
import {DataService} from "../shared/service/data.service";
import {companyDetail, marketDetail, stockDetail} from "../shared/model/companyDetail";

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

@Input() symbol: string;
 stockData : stockDetail;
  constructor(private _dataService : DataService) { }

  ngOnInit(){
    let companyDetail : companyDetail;
    let marketDetail : marketDetail;
    let logoUrl : string;
    this._dataService.getStockData(this.symbol).subscribe((response) => {
      companyDetail = response[0];
      logoUrl = response[1].url;
      marketDetail = response[2][0];
      this.stockData = {'companyData':companyDetail, 'companyLogoUrl':logoUrl,'marketData':marketDetail};
    });

  }

}
