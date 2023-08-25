import React, { useState } from "react";
import AddressBar from "./components/AddressBar";
import NavBar from "./components/NavBar";
import { getLatLongForAddress } from "./geocode";
import getForecast from "./forecast";
import { WeatherCard } from "./components/WeatherCard";

import styles from "./App.module.css";
import { ForecastPeriod } from "./types";
import sample_forecast from "./sample_forecast.json";
import "./main.css";

const sample = sample_forecast.properties.periods;
function App() {
  const [data, setData] = useState<ForecastPeriod[]>([]);
  const buttonHandler = () => {
    setData(sample);
  };
  return (
    <div>
      <NavBar></NavBar>

      <AddressBar
        onAddressSubmit={async (input_str: string) => {
          // TODO
          const { lat, long } = await getLatLongForAddress(input_str);
          const forecast = await getForecast(lat, long);
          // console.log("ok", forecast.properties.periods);
          // get lat long data
          setData(forecast.properties.periods);
        }}
        // setData(date);
      />
      <button className={styles.button} onClick={buttonHandler}>
        Load Sample
      </button>
      <div className={styles.container}>
        {data.map((d) => (
          <WeatherCard key={d.number} forecast={d} />
        ))}
      </div>
    </div>
  );
}

export default App;
