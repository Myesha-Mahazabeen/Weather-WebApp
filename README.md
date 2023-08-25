[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/jNVNGS9C)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11121471&assignment_repo_type=AssignmentRepo)
# Assignment 4: React-ify the weather forecast

In this assignment, we'll turn the weather forecast site from the previous assignments into a React application.

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

- `client/geocode.ts` and `client/forecast.ts` are the functions you implemented in Assignment 3, translated to typescript.
- `client/types.ts` contains type definitions.
- `client/sample_forecast.json` is the same sample data, but it's not wired to anything right now
- `client/components/NavBar.tsx` contains an extremely barebones header/navbar
- `client/components/AddressBar.tsx` has a component for the address lookup box
- `server/server.ts` is the same server, translated to typescript
- `server/cache.ts` was my attempt at caching the requests to be nice to the Census/NWS, but it's not working.

## What you need to do

- Implement a component to display a single forecast "item". (I don't think you need a component to hold the whole forecast, but you can if you want.)
- In `App.tsx`, implement a function to pass to the `onAddressSubmit` prop of `AddressBar` that will handle:
  - fetching the weather forecast for the provided address
  - showing an alert box if the address can't be geo-coded (if you want to do more sophisticated-looking error handling, feel free)
  - displaying the resulting weather forecast

**Hint:** Use the `useState` hook to create a forecast state and update it from your `onAddressSubmit` function.
