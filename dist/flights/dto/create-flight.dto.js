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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFlightDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const passenger_schema_1 = require("../../passengers/schemas/passenger.schema");
class CreateFlightDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "27/12/2022" }),
    __metadata("design:type", String)
], CreateFlightDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Aterrizando" }),
    __metadata("design:type", String)
], CreateFlightDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Amsterdam" }),
    __metadata("design:type", String)
], CreateFlightDto.prototype, "origin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Paris" }),
    __metadata("design:type", String)
], CreateFlightDto.prototype, "destination", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 172 }),
    __metadata("design:type", Number)
], CreateFlightDto.prototype, "num_passengers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ["Pasajero1, Pasajero2"] }),
    __metadata("design:type", passenger_schema_1.Passenger)
], CreateFlightDto.prototype, "passengers", void 0);
exports.CreateFlightDto = CreateFlightDto;
//# sourceMappingURL=create-flight.dto.js.map