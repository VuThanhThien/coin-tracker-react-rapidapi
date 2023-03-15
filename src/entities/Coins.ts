import {OrderBy, ReferenceCurrencyUuid, TimePeriod} from '../constant/Coins.const'

export interface CoinsInput {
    referenceCurrencyUuid?: ReferenceCurrencyUuid;
    timePeriod?: TimePeriod;
    uuids? : Array<string>[];
    orderBy? : OrderBy;
    search? : string;
    orderDirection? : 'desc' | 'asc';
    limit?: number;
    offset? : number;
  }
  export interface CoinsExchangeInput {
    referenceCurrencyUuid?: ReferenceCurrencyUuid;
    uuid : string;
    orderBy? : OrderBy;
    search? : string;
    orderDirection? : 'desc' | 'asc';
    limit?: number;
    offset? : number;
  }

export interface CryptocurrenciesProp {
    simplified?: boolean
}