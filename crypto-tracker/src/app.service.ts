import { Injectable } from '@nestjs/common';
import { CryptoFetcherService } from './crypto-fetcher/crypto-fetcher.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Crypto } from 'SCHEMA';

@Injectable()
export class AppService {
  constructor(
    private readonly cryptoFetcher: CryptoFetcherService,
    @InjectModel(Crypto.name) private readonly cryptoModel: Model<Crypto>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getCryptoList() {
    return await this.cryptoFetcher.fetchData();
  }

  async getCrytoDetailList(code: string, limit: string) {
    return this.cryptoModel
      .find({ code })
      .select('-_id -updatedAt -__v')
      .sort({ createdAt: -1 })
      .limit(parseInt(limit));
  }
}
