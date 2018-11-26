import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebpageComponent } from './webpage/webpage.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { DataService } from './shared/service/data.service';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WebpageComponent,
    StockCardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
