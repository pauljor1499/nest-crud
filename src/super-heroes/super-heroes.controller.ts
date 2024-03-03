import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperHeroesService } from './super-heroes.service';
import { SuperHeroes } from './schema/super-heroes.schema';

@Controller('super-heroes')
export class SuperHeroesController {

	constructor(private superHeroesService: SuperHeroesService) { }

	@Get()
	async getAll() {
		return this.superHeroesService.getAll();
	}

	@Post()
	async createSuperHero(@Body() superHeroes: SuperHeroes) {
		return this.superHeroesService.create(superHeroes);
	}
}
