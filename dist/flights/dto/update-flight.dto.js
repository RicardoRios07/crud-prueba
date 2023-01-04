"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlightDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_flight_dto_1 = require("./create-flight.dto");
class UpdateFlightDto extends (0, swagger_1.PartialType)(create_flight_dto_1.CreateFlightDto) {
}
exports.UpdateFlightDto = UpdateFlightDto;
//# sourceMappingURL=update-flight.dto.js.map