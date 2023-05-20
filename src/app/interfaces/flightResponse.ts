import { transportResponse } from "./transportResponse";

export interface flightResponse {
    origin: string,
    destination: string,
    price: number,
    transport: transportResponse 
}