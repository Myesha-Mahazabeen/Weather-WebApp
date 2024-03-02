# Weather Forecast

A weather forecast site is built using React TypeScript.

The `src` directory looks like this:

```
src
├── client
│   ├── App.tsx
│   ├── components
│   │   ├── AddressBar.tsx
│   │   └── NavBar.tsx
|   |   └── WeatherCard.tsx
│   ├── forecast.ts
│   ├── geocode.ts
│   ├── main.css
│   ├── main.tsx
│   ├── sample_forecast.json
│   ├── types.ts
│   └── vite-env.d.ts
└── server
    ├── cache.ts
    └── server.ts
```

## Features

- Implemented a component to display a single forecast "item"
- In `App.tsx`, implementd a function to pass to the `onAddressSubmit` prop of `AddressBar` that handles:
  - fetching the weather forecast for the provided address
  - showing an alert box if the address can't be geo-coded
  - displaying the resulting weather forecast
 
## Video Walkthrough
 
    

![](https://github.com/Myesha-Mahazabeen/Weather-WebApp/blob/master/Weather.gif)
