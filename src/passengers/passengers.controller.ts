import { Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  Req
} from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { ApiTags } from "@nestjs/swagger";
import { Request } from "express";


@Controller('passengers')
@ApiTags("Passenger")

export class PassengersController {
  constructor(private readonly passengersService: PassengersService) {}

  @Post()
  async create(@Body() createPassengerDto: CreatePassengerDto) {
    return this.passengersService.create(createPassengerDto);
  }

  @Get()
  async findAll(@Req() request: Request) {
    return this.passengersService.findAll(request);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.passengersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePassengerDto: UpdatePassengerDto) {
    return this.passengersService.update(id, updatePassengerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.passengersService.remove(id);
  }
}
