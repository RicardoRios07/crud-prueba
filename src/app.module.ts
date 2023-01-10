import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { PassengersModule } from './passengers/passengers.module';
import { FlightsModule } from './flights/flights.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/crud"),
    PassengersModule, 
    FlightsModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
