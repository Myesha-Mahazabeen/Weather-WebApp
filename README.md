[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/jNVNGS9C)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11121471&assignment_repo_type=AssignmentRepo)
# Weather Forecast

A weather forecast site is built using React TypeScript

The `src` directory looks like this:

```
src
├── client
│   ├── App.tsx
│   ├── components
│   │   ├── AddressBar.tsx
│   │   └── NavBar.tsx
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


## What is done

- Implemented a component to display a single forecast "item"
- In `App.tsx`, implementd a function to pass to the `onAddressSubmit` prop of `AddressBar` that handles:
  - fetching the weather forecast for the provided address
  - showing an alert box if the address can't be geo-coded 
  - displaying the resulting weather forecast

[!(https://github.com/Myesha-Mahazabeen/Weather-WebApp/blob/master/weather.gif)]



