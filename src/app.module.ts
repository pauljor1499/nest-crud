import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

const DB_USER = 'admin';
const DB_PASSWORD = 'uaqw25c6bsqDciyq';
const DB_NAME = 'NestCRUD'

@Module({
	imports: [
		MongooseModule.forRoot(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.aeltnpt.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`),
	],
	controllers: [AppController],
	providers: [AppService,],
})
export class AppModule { }
