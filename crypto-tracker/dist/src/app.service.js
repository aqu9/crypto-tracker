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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const crypto_fetcher_service_1 = require("./crypto-fetcher/crypto-fetcher.service");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const SCHEMA_1 = require("../SCHEMA");
let AppService = class AppService {
    constructor(cryptoFetcher, cryptoModel) {
        this.cryptoFetcher = cryptoFetcher;
        this.cryptoModel = cryptoModel;
    }
    getHello() {
        return 'Hello World!';
    }
    async getCryptoList() {
        return await this.cryptoFetcher.fetchData();
    }
    async getCrytoDetailList(code, limit) {
        return this.cryptoModel
            .find({ code })
            .select('-_id -updatedAt -__v')
            .sort({ createdAt: -1 })
            .limit(parseInt(limit));
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(SCHEMA_1.Crypto.name)),
    __metadata("design:paramtypes", [crypto_fetcher_service_1.CryptoFetcherService,
        mongoose_2.Model])
], AppService);
//# sourceMappingURL=app.service.js.map