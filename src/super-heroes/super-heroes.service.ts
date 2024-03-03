import { Injectable } from '@nestjs/common';
import { SuperHeroDocument, SuperHeroes } from './schema/super-heroes.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SuperHeroesService {
	constructor(@InjectModel(SuperHeroes.name) private superHeroModel: Model<SuperHeroDocument>) { }

	async getAll(): Promise<SuperHeroes[]> {
		return this.superHeroModel.find().exec();
	}

	async create(superHeroes: SuperHeroes) {
		const newSuperHero = new this.superHeroModel(superHeroes);
		return newSuperHero.save();
	}

	async getByID(id: string) {
		return this.superHeroModel.findById(id).exec();
	}

	async update(id: string, superHeroes: SuperHeroes) {
		return await this.superHeroModel.findByIdAndUpdate(id, superHeroes, { new: true });
	}

	async delete(id: string) {
		await this.superHeroModel.findByIdAndDelete(id);
	}

}
