export type Point = {
  properties: {
    gridId: string;
    gridX: string;
    gridY: string;
    forecast: string;
    forecastHourly: string;
  };
};

export type WmoUnit = {
  unitCode: string;
  value: number;
};

export type ForecastPeriod = {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  probabilityOfPrecipitation: WmoUnit;
  dewpoint: WmoUnit;
  relativeHumidity: WmoUnit;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
};

export type Forecast = {
  properties: {
    updated: string;
    validTimes: string;
    periods: Array<ForecastPeriod>;
  };
};

export type Address = {
  address: string;
  lat: number;
  long: number;
};

export type AddressMatch = {
  coordinates: {
    x: number;
    y: number;
  };
  matchedAddress: string;
};

export type AddressResponse = {
  result: {
    input: {
      address: string;
    };
    addressMatches: Array<AddressMatch>;
  };
};
