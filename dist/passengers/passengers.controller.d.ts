import { PassengersService } from './passengers.service';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { Request } from "express";
export declare class PassengersController {
    private readonly passengersService;
    constructor(passengersService: PassengersService);
    create(createPassengerDto: CreatePassengerDto): Promise<import("./schemas/passenger.schema").Passenger>;
    findAll(request: Request): Promise<import("./schemas/passenger.schema").Passenger[]>;
    findOne(id: string): Promise<import("./schemas/passenger.schema").Passenger & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updatePassengerDto: UpdatePassengerDto): Promise<import("./schemas/passenger.schema").Passenger & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("./schemas/passenger.schema").Passenger & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
