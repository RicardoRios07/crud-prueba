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
exports.PassengersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const passenger_schema_1 = require("./schemas/passenger.schema");
let PassengersService = class PassengersService {
    constructor(PassengerModel) {
        this.PassengerModel = PassengerModel;
    }
    async create(createPassengerDto) {
        return this.PassengerModel.create(createPassengerDto);
    }
    async findAll(request) {
        return this.PassengerModel
            .find(request.query)
            .setOptions({ sanitizeFilter: true })
            .exec();
    }
    async findOne(id) {
        return this.PassengerModel.findOne({ _id: id }).exec();
    }
    update(id, updatePassengerDto) {
        return this.PassengerModel.findByIdAndUpdate({ _id: id }, updatePassengerDto, {
            new: true,
        });
    }
    async remove(id) {
        return this.PassengerModel.findByIdAndRemove({ _id: id }).exec();
    }
};
PassengersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(passenger_schema_1.Passenger.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PassengersService);
exports.PassengersService = PassengersService;
//# sourceMappingURL=passengers.service.js.map