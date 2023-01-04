import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types, Schema as MongooseSchema } from "mongoose";
import { Passenger } from "../../passengers/schemas/passenger.schema";

export type FlightDocument = Flight & Document;

@Schema()
export class Flight{
    @Prop()
    date: string;

    @Prop()
    status: string;

    @Prop()
    origin: string;

    @Prop()
    destination: string;

    @Prop()
    num_passengers: number;
    
    /*@Prop([String])
    passengers: Passenger;*/

    @Prop({type: MongooseSchema.Types.ObjectId, ref: "Passenger"})
    passengers: Passenger;
  
}

export const FlightSchema = SchemaFactory.createForClass(Flight);