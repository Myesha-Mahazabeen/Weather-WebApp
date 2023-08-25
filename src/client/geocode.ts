import axios from "axios";
import { AddressResponse } from "./types";

const ADDRESS_ENDPOINT = "http://localhost:3000/address";

/**
 * Assemble the URL for a particular address
 *
 * @param {string} address
 * @returns a string of the assembled URL
 */
export function buildCensusURL(address: string): URL {
  const url = new URL(ADDRESS_ENDPOINT);
  // append key-value pairs for the query params
  url.searchParams.append("address", address);
  url.searchParams.append("benchmark", "2020");
  url.searchParams.append("format", "json");
  return url;
}

/**
 *
 * @param {string} address
 * @returns {Promise<{address: string, lat: number, long: number}>}
 */
export async function getLatLongForAddress(
  address: string
): Promise<{ address: string; lat: number; long: number }> {
  const url = buildCensusURL(address);
  const { data } = await axios.get<AddressResponse>(url.toString());
  if (data.result.addressMatches.length === 0) {
    return Promise.reject(new Error("no match found"));
  }
  const match = data.result.addressMatches[0];
  return {
    address: match.matchedAddress,
    long: match.coordinates.x,
    lat: match.coordinates.y,
  };
}
