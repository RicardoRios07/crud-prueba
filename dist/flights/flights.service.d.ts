import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Flight, FlightDocument } from "./schemas/flight.schema";
import { Model } from "mongoose";
import { Request } from "express";
export declare class FlightsService {
    private readonly flightModel;
    constructor(flightModel: Model<FlightDocument>);
    create(createFlightDto: CreateFlightDto): Promise<Flight>;
    findAll(request: Request): Promise<Flight[]>;
    findOne(id: string): Promise<Flight>;
    update(id: string, updateBookDto: UpdateFlightDto): Promise<Flight>;
    remove(id: string): Promise<Flight & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
