import { Injectable } from "@nestjs/common";
import { CreateHomePageInput } from "../dto/CreateHomePage.input";
import { UpdateHomePageInput } from "../dto/UpdateHomePage.input";
import { HomePageRepository } from "../repository/homePage.repository";

@Injectable()
export class HomePageService{
  constructor( private homePageRepository: HomePageRepository){}

  async createHomePage({ photos, products, figures }: CreateHomePageInput) {
    return await this.homePageRepository.create(photos, products, figures)
  }

  async updateHomePage({ _id, photos, products, figures }: UpdateHomePageInput) {
    return await this.homePageRepository.update(_id, photos, products, figures)
  }

  async getHomePage() {
    return await this.homePageRepository.get()
  }
}