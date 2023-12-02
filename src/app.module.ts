import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
// import {TodosModule} from './modules/todos/todos.module'
import { UserModule } from './modules/user/user.module';
import { UserLoginModule } from './modules/user-login/user-login.module';
import { CategoryModule } from './modules/category/category.module';
// import { AuthModule } from './modules/auth/auth.module';
// import { ProfileModule } from './modules/profile/profile.module';
import { TwilioModule } from 'nestjs-twilio';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true
    }),
    TwilioModule.forRoot({
      accountSid: "ACf9698e4a8943f1ea95fd4f32def97272",
      authToken: "1395931125543aca5d0d39c61a84d375",
    }),
    // TwilioModule.forRoot({
    //   accountSid: process.env.TWILIO_ACCOUNT_SID,
    //   authToken: process.env.TWILIO_AUTH_TOKEN,
    // }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    UserLoginModule,
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
