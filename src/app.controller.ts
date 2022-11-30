import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { phoneDto } from './phone.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('form')
  getHello(): object {
    return {};
  }

  @Post()
  @Render('phone')
  setPhone(@Body() body: phoneDto): object {
    return body;
  }
}
