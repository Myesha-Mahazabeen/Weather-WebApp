import axios from "axios";
import { Forecast, Point } from "../client/types";

const POINT_ENDPOINT = "http://localhost:3000/weather/points";

/**
 * Lookup the grid point corresponding to a given lat/long
 *
 * @param {number} latitude
 * @param {number} longitude
 */
async function getPoint(latitude: number, longitude: number): Promise<Point> {
  const url = `${POINT_ENDPOINT}/${latitude},${longitude}`;
  const { data } = await axios.get<Point>(url);
  return data;
}

/**
 * Get the forecast for a given lat/long pair
 *
 * @param {number} latitude
 * @param {number} longitude
 */
export default async function getForecast(
  latitude: number,
  longitude: number
): Promise<Forecast> {
  const point = await getPoint(latitude, longitude);
  const forecastUrl = point.properties.forecast;
  const { data } = await axios.get<Forecast>(forecastUrl);
  return data;
}
