import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PassengerDocument = Passenger & Document;

@Schema()
export class Passenger {
    @Prop()
    _id: string;

    @Prop()
    name: string;

    @Prop()
    last_name: string;

    @Prop()
    edad: number;

    @Prop()
    num_asiento: string;

}

export const PassengerSchema = SchemaFactory.createForClass(Passenger);