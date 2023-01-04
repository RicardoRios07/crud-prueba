import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Request } from "express";
export declare class FlightsController {
    private readonly flightsService;
    constructor(flightsService: FlightsService);
    create(createFlightDto: CreateFlightDto): Promise<import("./schemas/flight.schema").Flight>;
    findAll(request: Request): Promise<import("./schemas/flight.schema").Flight[]>;
    findOne(id: string): Promise<import("./schemas/flight.schema").Flight>;
    update(id: string, updateFlightDto: UpdateFlightDto): Promise<import("./schemas/flight.schema").Flight>;
    remove(id: string): Promise<import("./schemas/flight.schema").Flight & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
