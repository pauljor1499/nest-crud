import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		MongooseModule.forRoot("mongodb+srv://admin:uaqw25c6bsqDciyq@cluster0.aeltnpt.mongodb.net/AngularTodo?retryWrites=true&w=majority&appName=Cluster0"),
		BookModule
	],
	controllers: [AppController],
	providers: [AppService,],
})
export class AppModule { }
