import { Controller, Get } from '@nestjs/common';
import { SuperHeroesService } from './super-heroes.service';

@Controller('super-heroes')
export class SuperHeroesController {

	constructor(private superHeroesService: SuperHeroesService) { }

	@Get()
	async getAll() {
		return this.superHeroesService.getAll();
	}
}
