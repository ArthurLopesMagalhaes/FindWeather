import axios from "axios";
import { IGeoCoding } from "../utils/geoCoding-response";

const { GEOCODING_API_KEY } = process.env;

const api = axios.create({
  baseURL: "https://api.opencagedata.com/geocode/v1/",
});

export const GeoCodingAPI = {
  getCountryCode: (country: string) => {
    return api.get<IGeoCoding>(
      `json?key=${GEOCODING_API_KEY}&q=${country}&language=pt`
    );
  },
};
