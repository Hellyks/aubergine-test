export interface stockDetail{
  companyData:companyDetail;
  companyLogoUrl:string;
  marketData:marketDetail;
}

export interface companyDetail{
  symbol:string;
  companyName:string;
  industry:string;
  CEO:string;
  website:string;
  description:string;
}

export interface marketDetail{
  marketPercent:number;
  lastSalePrice:number;
  lastSaleSize:number;
  lastSaleTime:any;
  lastUpdated:any;
  sector:any;
}
