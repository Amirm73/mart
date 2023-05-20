import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { HomePage } from "../domain/homePage.model";
import { CreateHomePageInput } from "../dto/CreateHomePage.input";
import { UpdateHomePageInput } from "../dto/UpdateHomePage.input";
import { HomePageService } from '../service/homePage.service';

@Resolver(() => HomePage)
export class HomePageResolver {
  constructor(private HomePageService: HomePageService) {}

  @Mutation(() => HomePage)
  async CreateHomePage(
	  @Args('updateHomePageInput') createHomePageInput: CreateHomePageInput) {
		  return this.HomePageService.createHomePage(createHomePageInput);
  }
		
  @Mutation(() => HomePage)
  async UpdateHomePage(
	@Args('updateHomePageInput') updateHomePageInput: UpdateHomePageInput) {
	return this.HomePageService.updateHomePage(updateHomePageInput);
  }
  
  @Query(() => HomePage )
  async GetHomePage() {
//   async GetHomePage(@Args('filters', { nullable: true }) getHomePageInput?: GetHomePageInput) {
    return this.HomePageService.getHomePage();
  }
}
