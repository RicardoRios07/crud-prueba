"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePassengerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_passenger_dto_1 = require("./create-passenger.dto");
class UpdatePassengerDto extends (0, swagger_1.PartialType)(create_passenger_dto_1.CreatePassengerDto) {
}
exports.UpdatePassengerDto = UpdatePassengerDto;
//# sourceMappingURL=update-passenger.dto.js.map