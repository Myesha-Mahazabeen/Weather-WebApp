import express from "express";
import ViteExpress from "vite-express";
import morgan from "morgan";
import {
  createProxyMiddleware,
  responseInterceptor,
} from "http-proxy-middleware";
import { cacheMiddleware } from "./cache";

const GEOCODING_ENDPOINT = "https://geocoding.geo.census.gov";
const WEATHER_GOV_ENDPOINT = "https://api.weather.gov/";

const app = express();

app.use(morgan("dev"));

// proxy localhost:3000/address to the onelineaddress endpoint
app.use(
  "/address",
  cacheMiddleware,
  createProxyMiddleware({
    target: GEOCODING_ENDPOINT,
    changeOrigin: true,
    pathRewrite: {
      [`^/address`]: "/geocoder/locations/onelineaddress",
    },
  })
);

// proxy localhost:3000/weather/... to api.weather.gov
app.use(
  "/weather",
  cacheMiddleware,
  createProxyMiddleware({
    target: WEATHER_GOV_ENDPOINT,
    changeOrigin: true,
    pathRewrite: {
      [`^/weather`]: "",
    },
    headers: {
      "User-Agent": "weather assignment",
    },
    followRedirects: true,
    selfHandleResponse: true,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    onProxyRes: responseInterceptor((responseBuffer, proxyRes) => {
      if (proxyRes.headers["content-type"] === "application/json") {
        const response = responseBuffer.toString("utf-8");
        const re = /https:\/\/api.weather.gov/g;
        return Promise.resolve(
          response.replace(re, "http://localhost:3000/weather/")
        );
      }
      return Promise.resolve(responseBuffer);
    }),
  })
);

app.use(express.static(__dirname));

ViteExpress.listen(app, 3000, () => {
  console.info("Express listening on port 3000");
});
