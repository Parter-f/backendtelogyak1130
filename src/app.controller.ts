import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { TextColorDto } from './text-color.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('form')
  getHello(): object {
    return {};
  }

  @Post()
  @Render('color')
  handleColor(@Body() body: TextColorDto): object {
    if(body.size <= 0){
      throw new Error('A méret pozitív kell , hogy legyen');
    }
    if()
    return body;
  }
}
