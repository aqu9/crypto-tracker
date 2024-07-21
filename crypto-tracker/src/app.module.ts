import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoFetcherService } from './crypto-fetcher/crypto-fetcher.service';
import { config } from 'dotenv';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { Crypto, cryptoSchema } from 'SCHEMA';
import { SocketGateway } from './socket/socket.gateway';
config();

@Module({
  imports: [
    HttpModule,
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGOURI),
    MongooseModule.forFeature([{ name: Crypto.name, schema: cryptoSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService, CryptoFetcherService, SocketGateway],
})
export class AppModule {}
