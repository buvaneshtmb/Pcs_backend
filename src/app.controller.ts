import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary : "Otp Send"})
  @Get()
  getHello() {
    return this.appService.sendSMS();
  }

  // @Get('/sendSMS'){
  //   sendSMS(){
  //     return this.appService.getHello();
  //   }
  // }
  
}
