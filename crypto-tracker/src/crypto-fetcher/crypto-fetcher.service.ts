import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Interval } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { catchError, firstValueFrom } from 'rxjs';
import { Crypto } from 'SCHEMA';
import { SocketGateway } from 'src/socket/socket.gateway';

@Injectable()
export class CryptoFetcherService {
  constructor(
    private readonly httpService: HttpService,
    private readonly sockerService: SocketGateway,
    @InjectModel(Crypto.name) private readonly cryptoModel: Model<Crypto>,
  ) {}

  @Interval(5000)
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

    const { data } = await firstValueFrom(
      this.httpService
        .post(`${process.env.LIVE_COIN_WATCH_URL}/coins/list`, body, {
          headers,
        })
        .pipe(
          catchError((error) => {
            console.log(error.message);
            throw 'An error happened!';
          }),
        ),
    );

    this.cryptoModel.insertMany(data);

    // emit all 5 data
    this.sockerService.emitLiveCryptoPrice('all', data);

    // emit indiviual
    data.forEach((elem: Crypto) => {
      this.sockerService.emitLiveCryptoPrice(elem.code, elem);
    });
    return data;
  }
}
