import { Passenger } from "../../passengers/schemas/passenger.schema";
export declare class CreateFlightDto {
    readonly date: string;
    readonly status: string;
    readonly origin: string;
    readonly destination: string;
    readonly num_passengers: number;
    readonly passengers: Passenger;
}
