import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.css']
})
export class WebpageComponent implements OnInit {

	companySymbolList : Array<String> = ['AAPL','MSFT','IBN','V','HDB','PYPL','TSLA','FB','AXP','KO','BABA','VOD'];

  constructor() { }

  ngOnInit() {
  }

}
