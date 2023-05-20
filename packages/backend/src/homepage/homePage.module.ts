import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { HomePage, HomePageSchema } from "./domain/homePage.model";
import { HomePageRepository } from "./repository/homePage.repository";
import { HomePageResolver } from "./resolver/homePage.resolver";
import { HomePageService } from './service/homePage.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: HomePage.name, schema: HomePageSchema }]),
  ],
  providers:[ HomePageResolver, HomePageService, HomePageRepository ],
  exports: [ HomePageService ]
})
export class HomePageModule {}
