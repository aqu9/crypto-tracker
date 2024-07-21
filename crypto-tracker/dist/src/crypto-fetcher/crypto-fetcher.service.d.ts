import { HttpService } from '@nestjs/axios';
import { Model } from 'mongoose';
import { Crypto } from 'SCHEMA';
import { SocketGateway } from 'src/socket/socket.gateway';
export declare class CryptoFetcherService {
    private readonly httpService;
    private readonly sockerService;
    private readonly cryptoModel;
    constructor(httpService: HttpService, sockerService: SocketGateway, cryptoModel: Model<Crypto>);
    fetchData(): Promise<any>;
}
