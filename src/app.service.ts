import { Injectable } from '@nestjs/common';
import {  TwilioService } from 'nestjs-twilio';

@Injectable()
export class AppService {

  public constructor(private readonly twilioService: TwilioService) {}

  getHello(): string {
    return 'Hello World!';
  }

   async sendSMS() {
     
    const data = await this.twilioService.client.messages.create({
      body: 'SMS Body, sent to the phone!',
      from: '+919688327012',
      to: '+918072661565',
    });

    console.log("dta about sms----->>>",data)

    return data
  }
}
