import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Category } from "../domain/category.model";
import { CreateCategoryInput } from "../dto/CreateCategory.input";
import { DeleteCategoryInput } from "../dto/DeleteCategory.input";
import { FindCategoryInput } from "../dto/FindCategory.input";
import { UpdateCategoryInput } from "../dto/UpdateCategory.input";
import { CategoryService } from "../service/category.service";

@Resolver()
export class CategoryResolver{
	constructor(private readonly categoryService: CategoryService) {}

	@Mutation(()=> Category)
	async createCategory(@Args('createCategoryInput') { name, enName, categoryIds }:CreateCategoryInput) {
		return this.categoryService.createCategory(name, enName, categoryIds)	
	}

	@Query(()=> Category)
	async findCategory(@Args('findCategoryInput') {_id, name, enName }:FindCategoryInput) {
		return this.categoryService.findCategory(_id, name, enName)	
	}
	
	@Mutation(() => Category)
	async updateCategory(@Args('updateCategoryInput') { _id, name, enName, categoryIds }:UpdateCategoryInput) {
		return this.categoryService.updateCategory(_id, name, enName, categoryIds)	
	}
	
	@Mutation(() => Category )
	async deleteCategory(@Args('deleteCategoryInput') { _id }:DeleteCategoryInput) {
		return this.categoryService.deleteCategory(_id)	
	}
}