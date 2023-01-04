import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Flight, FlightDocument } from "./schemas/flight.schema";
import { Model } from "mongoose";
import { Request } from "express";

@Injectable()
export class FlightsService {
  constructor( 
    @InjectModel(Flight.name) private readonly flightModel: Model<FlightDocument>, 
  ) {}

  async create(createFlightDto: CreateFlightDto): Promise<Flight> { 
    return this.flightModel.create(createFlightDto); 
  }

  async findAll(request: Request): Promise<Flight[]> { 
    return this.flightModel
    .find(request.query)
    .populate('passengers')
    .lean()
    .setOptions({sanitizeFilter: true})
    .exec();
  }

  async findOne(id: string): Promise<Flight> { 
    return this.flightModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateBookDto: UpdateFlightDto): Promise<Flight> { 
    console.log(updateBookDto);
    
    return this.flightModel.findByIdAndUpdate( id, UpdateFlightDto, { 
      new: true,       
    });/*
    let aux = await this.flightModel.findById(id)
    aux.passengers = updateBookDto.passengers;
    return aux.save();*/
  }

  async remove(id: string) { 
    return this.flightModel.findByIdAndRemove({ _id: id }).exec(); 
  }
}
