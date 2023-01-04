import { ApiProperty } from "@nestjs/swagger";

export class CreatePassengerDto {

    @ApiProperty({example: "luisvidal"})
    readonly _id: string;

    @ApiProperty({example: "Luis"})
    readonly name: string;

    @ApiProperty({example: "Vidal"})
    readonly last_name: string;

    @ApiProperty({example: 38})
    readonly edad: number;

    @ApiProperty({example: "C38" })
    readonly num_asiento: string;
}

