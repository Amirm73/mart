import { Field, InputType, Int, InterfaceType } from "@nestjs/graphql";
import { IHomeImage } from "./homeFigure.interface ";

@InterfaceType()
@InputType("ProductType")
export abstract class IProduct{
	@Field()
	image:IHomeImage;

	@Field(()=> Int)
	normalPrice:number;

	@Field(()=> Int)
	salePrice:number;
	
	@Field(()=> Int)
	off:number
}

@InterfaceType()
@InputType("HomeProduct")
export abstract class IHomeProduct{
	@Field(()=> [IProduct])
	incredible: IProduct[]

	@Field(()=> [IProduct])
	topView: IProduct[]

	@Field(()=> [IProduct])
	bestSelling: IProduct[]
}