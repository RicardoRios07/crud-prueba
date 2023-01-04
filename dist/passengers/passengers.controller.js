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
exports.PassengersController = void 0;
const common_1 = require("@nestjs/common");
const passengers_service_1 = require("./passengers.service");
const create_passenger_dto_1 = require("./dto/create-passenger.dto");
const update_passenger_dto_1 = require("./dto/update-passenger.dto");
const swagger_1 = require("@nestjs/swagger");
let PassengersController = class PassengersController {
    constructor(passengersService) {
        this.passengersService = passengersService;
    }
    async create(createPassengerDto) {
        return this.passengersService.create(createPassengerDto);
    }
    async findAll(request) {
        return this.passengersService.findAll(request);
    }
    async findOne(id) {
        return this.passengersService.findOne(id);
    }
    async update(id, updatePassengerDto) {
        return this.passengersService.update(id, updatePassengerDto);
    }
    async remove(id) {
        return this.passengersService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_passenger_dto_1.CreatePassengerDto]),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_passenger_dto_1.UpdatePassengerDto]),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "remove", null);
PassengersController = __decorate([
    (0, common_1.Controller)('passengers'),
    (0, swagger_1.ApiTags)("Passenger"),
    __metadata("design:paramtypes", [passengers_service_1.PassengersService])
], PassengersController);
exports.PassengersController = PassengersController;
//# sourceMappingURL=passengers.controller.js.map