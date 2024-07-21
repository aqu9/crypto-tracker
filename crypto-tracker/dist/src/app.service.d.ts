import { CryptoFetcherService } from './crypto-fetcher/crypto-fetcher.service';
import { Model } from 'mongoose';
import { Crypto } from 'SCHEMA';
export declare class AppService {
    private readonly cryptoFetcher;
    private readonly cryptoModel;
    constructor(cryptoFetcher: CryptoFetcherService, cryptoModel: Model<Crypto>);
    getHello(): string;
    getCryptoList(): Promise<any>;
    getCrytoDetailList(code: string, limit: string): Promise<(import("mongoose").Document<unknown, {}, Crypto> & Crypto & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
