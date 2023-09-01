import React from "react";
import { ForecastPeriod } from "../types";
import styles from "../App.module.css";
interface CardType {
  forecast: ForecastPeriod;
}

export const WeatherCard: React.FC<CardType> = ({ forecast }) => {
  return (
    <table className={styles.inner_table}>
      <tbody>
        <tr>
          <td rowSpan={2} className={styles.left}>
            {forecast.name}
          </td>
          <td className={styles.right}>
            <img
              alt="icon"
              src={forecast.icon}
              className={styles.content_right}
            />
          </td>
        </tr>
        <tr>
          <td className={styles.right}>{forecast.temperature}</td>
        </tr>
      </tbody>
    </table>
  );
};
