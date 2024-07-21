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
exports.cryptoSchema = exports.Crypto = exports.Delta = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Delta = class Delta {
};
exports.Delta = Delta;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Delta.prototype, "hour", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Delta.prototype, "day", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Delta.prototype, "week", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Delta.prototype, "month", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Delta.prototype, "quarter", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Delta.prototype, "year", void 0);
exports.Delta = Delta = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false })
], Delta);
let Crypto = class Crypto {
};
exports.Crypto = Crypto;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Crypto.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Crypto.prototype, "rate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Crypto.prototype, "volume", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Crypto.prototype, "cap", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Delta, required: true }),
    __metadata("design:type", Delta)
], Crypto.prototype, "delta", void 0);
exports.Crypto = Crypto = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        timeseries: {
            timeField: 'createdAt',
            metaField: 'code',
            granularity: 'minutes',
        },
    })
], Crypto);
exports.cryptoSchema = mongoose_1.SchemaFactory.createForClass(Crypto);
//# sourceMappingURL=crypto.schema.js.map