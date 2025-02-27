"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const crypto_fetcher_service_1 = require("./crypto-fetcher/crypto-fetcher.service");
const dotenv_1 = require("dotenv");
const axios_1 = require("@nestjs/axios");
const schedule_1 = require("@nestjs/schedule");
const mongoose_1 = require("@nestjs/mongoose");
const SCHEMA_1 = require("../SCHEMA");
const socket_gateway_1 = require("./socket/socket.gateway");
(0, dotenv_1.config)();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            schedule_1.ScheduleModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGOURI),
            mongoose_1.MongooseModule.forFeature([{ name: SCHEMA_1.Crypto.name, schema: SCHEMA_1.cryptoSchema }]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, crypto_fetcher_service_1.CryptoFetcherService, socket_gateway_1.SocketGateway],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map