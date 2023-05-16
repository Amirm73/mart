import { Field, InputType, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
@InputType("HomeImage")
export abstract class IHomeImage{
	@Field()
	imageUrl:string;

	@Field({nullable:true})
	title?:string;

	@Field({nullable:true})
	alt?:string
}

@InterfaceType({
	description:"for brands, partnerships, etc"
})
@InputType("Figure")
export abstract class IFigure{
	@Field()
	image: IHomeImage;
	
	@Field()
	description: string
}

@InterfaceType()
@InputType("HomeFigure")
export abstract class IHomeFigure{
	@Field(() => [IFigure], {
		nullable: true,
		description:"the brands of our products"
	})
	brands?: IFigure[]

	@Field(() => [IFigure], {
		nullable: true,
		description:"example: fast delivery, cash back etc"
	})
	ourValues?: IFigure[]
}

