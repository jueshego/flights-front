import { flightResponse } from "./flightResponse";

export interface JourneyResponse {
    origin: string,
    destination: string,
    price: number,
    flights: flightResponse[],
    message: string
}