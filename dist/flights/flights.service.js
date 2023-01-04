"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightsService = void 0;
const common_1 = require("@nestjs/common");
const update_flight_dto_1 = require("./dto/update-flight.dto");
const mongoose_1 = require("@nestjs/mongoose");
const flight_schema_1 = require("./schemas/flight.schema");
const mongoose_2 = require("mongoose");
let FlightsService = class FlightsService {
    constructor(flightModel) {
        this.flightModel = flightModel;
    }
    async create(createFlightDto) {
        return this.flightModel.create(createFlightDto);
    }
    async findAll(request) {
        return this.flightModel
            .find(request.query)
            .populate('passengers')
            .lean()
            .setOptions({ sanitizeFilter: true })
            .exec();
    }
    async findOne(id) {
        return this.flightModel.findOne({ _id: id }).exec();
    }
    async update(id, updateBookDto) {
        console.log(updateBookDto);
        return this.flightModel.findByIdAndUpdate(id, update_flight_dto_1.UpdateFlightDto, {
            new: true,
        });
    }
    async remove(id) {
        return this.flightModel.findByIdAndRemove({ _id: id }).exec();
    }
};
FlightsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(flight_schema_1.Flight.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FlightsService);
exports.FlightsService = FlightsService;
//# sourceMappingURL=flights.service.js.map