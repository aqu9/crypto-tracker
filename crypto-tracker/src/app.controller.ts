import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/crypto')
  async getCryptoList() {
    return await this.appService.getCryptoList();
  }

  @Get('/crypto/detail/:code/:limit')
  async getCrytoDetailList(
    @Param('limit') limit: string,
    @Param('code') code: string,
  ) {
    console.log(limit);
    return this.appService.getCrytoDetailList(code, limit);
  }
}
