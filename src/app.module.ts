import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { Jobs } from './jobs';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`),
    JobsModule,
    // MongooseModule.forRoot(`mongodb://localhost:27017/jobs`),
  ],
  controllers: [AppController],
  providers: [AppService, Jobs],
})
export class AppModule {}
