import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getCryptoList(): Promise<any>;
    getCrytoDetailList(limit: string, code: string): Promise<(import("mongoose").Document<unknown, {}, import("../SCHEMA").Crypto> & import("../SCHEMA").Crypto & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
