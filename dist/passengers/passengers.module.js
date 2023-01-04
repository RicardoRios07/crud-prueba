"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassengersModule = void 0;
const common_1 = require("@nestjs/common");
const passengers_service_1 = require("./passengers.service");
const passengers_controller_1 = require("./passengers.controller");
const mongoose_1 = require("@nestjs/mongoose");
const passenger_schema_1 = require("./schemas/passenger.schema");
let PassengersModule = class PassengersModule {
};
PassengersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: passenger_schema_1.Passenger.name, schema: passenger_schema_1.PassengerSchema
                }]),
        ],
        controllers: [passengers_controller_1.PassengersController],
        providers: [passengers_service_1.PassengersService]
    })
], PassengersModule);
exports.PassengersModule = PassengersModule;
//# sourceMappingURL=passengers.module.js.map