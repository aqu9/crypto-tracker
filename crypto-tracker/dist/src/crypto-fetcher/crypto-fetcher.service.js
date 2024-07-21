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
exports.CryptoFetcherService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const schedule_1 = require("@nestjs/schedule");
const mongoose_2 = require("mongoose");
const rxjs_1 = require("rxjs");
const SCHEMA_1 = require("../../SCHEMA");
const socket_gateway_1 = require("../socket/socket.gateway");
let CryptoFetcherService = class CryptoFetcherService {
    constructor(httpService, sockerService, cryptoModel) {
        this.httpService = httpService;
        this.sockerService = sockerService;
        this.cryptoModel = cryptoModel;
    }
    async fetchData() {
        console.log('fetch crypto data...');
        const headers = {
            'Content-Type': 'application/json',
            'x-api-key': process.env.LIVE_COIN_WATCH_API_KEY,
        };
        const body = {
            currency: 'INR',
            sort: 'rank',
            order: 'ascending',
            offset: 0,
            limit: 5,
            meta: false,
        };
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService
            .post(`${process.env.LIVE_COIN_WATCH_URL}/coins/list`, body, {
            headers,
        })
            .pipe((0, rxjs_1.catchError)((error) => {
            console.log(error.message);
            throw 'An error happened!';
        })));
        this.cryptoModel.insertMany(data);
        this.sockerService.emitLiveCryptoPrice('all', data);
        data.forEach((elem) => {
            this.sockerService.emitLiveCryptoPrice(elem.code, elem);
        });
        return data;
    }
};
exports.CryptoFetcherService = CryptoFetcherService;
__decorate([
    (0, schedule_1.Interval)(5000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CryptoFetcherService.prototype, "fetchData", null);
exports.CryptoFetcherService = CryptoFetcherService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, mongoose_1.InjectModel)(SCHEMA_1.Crypto.name)),
    __metadata("design:paramtypes", [axios_1.HttpService,
        socket_gateway_1.SocketGateway,
        mongoose_2.Model])
], CryptoFetcherService);
//# sourceMappingURL=crypto-fetcher.service.js.map