import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

	@Get('/:id')
	async getByID(@Param('id') id: string) {
		return this.superHeroesService.getByID(id);
	}

	@Put('/:id')
	async updateSuperHeroes(@Param('id') id: string, @Body() superHeroes: SuperHeroes) {
		return await this.superHeroesService.update(id, superHeroes);
	}

	@Delete('/:id')
	async deleteSuperHero(@Param('id') id: string) {
		await this.superHeroesService.delete(id);
	}
}
