import { Module } from '@nestjs/common';
import { CategoryModule } from 'src/category/category.module';

@Module({
	imports: [
		CategoryModule
	],
	exports: [
		
	]
})
export class CategoryGroupModule {}