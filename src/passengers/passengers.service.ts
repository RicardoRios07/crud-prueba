import { Injectable } from '@nestjs/common';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model, sanitizeFilter } from "mongoose";
import { Passenger, PassengerDocument, PassengerSchema } from "./schemas/passenger.schema";
import { Request } from "express";

@Injectable()
export class PassengersService {
  constructor(
    @InjectModel(Passenger.name) private readonly PassengerModel:
    Model<PassengerDocument>,
  ){}


  async create(createPassengerDto: CreatePassengerDto): Promise<Passenger>{
    return this.PassengerModel.create(createPassengerDto);
  }

  async findAll(request: Request): Promise<Passenger[]> {
    return this.PassengerModel
    .find(request.query)
    .setOptions({sanitizeFilter:true})
    .exec();
  }

  async findOne(id: string) {
    return this.PassengerModel.findOne({_id: id}).exec();
  }

  update(id: string, updatePassengerDto: UpdatePassengerDto) {
    return this.PassengerModel.findByIdAndUpdate({_id: id},
      updatePassengerDto, {
        new: true,
      });
  }

  async remove(id: string) {
    return this.PassengerModel.findByIdAndRemove({_id: id}). exec();
  }
}
