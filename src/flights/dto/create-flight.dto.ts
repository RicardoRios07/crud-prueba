import { ApiProperty } from "@nestjs/swagger";
import { Passenger } from "../../passengers/schemas/passenger.schema";

export class CreateFlightDto {
    @ApiProperty({example: "27/12/2022"})
    readonly date: string;

    @ApiProperty({example: "Aterrizando"})
    readonly status: string;

    @ApiProperty({example: "Amsterdam"})
    readonly origin: string;

    @ApiProperty({example: "Paris"})
    readonly destination: string;

    @ApiProperty({example: 172})
    readonly num_passengers: number;

    @ApiProperty({example: ["Pasajero1, Pasajero2"]})
    readonly passengers: Passenger;

}