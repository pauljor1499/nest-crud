import { Injectable } from '@nestjs/common';
import { SuperHeroDocument, SuperHeroes } from './schema/super-heroes.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SuperHeroesService {
	constructor(@InjectModel(SuperHeroes.name) private superHeroModel: Model<SuperHeroDocument>) { }
}
