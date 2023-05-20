import { Field, InputType, InterfaceType } from '@nestjs/graphql';
import { Schema } from 'mongoose';
import { IHomeImage } from './homeFigure.interface ';

@InterfaceType()
@InputType("Banner")
export abstract class IPhoto{
	@Field(()=> String)
	_id: Schema.Types.ObjectId
	
	@Field()
	image: IHomeImage;
	
	@Field()
	pageUrl: string // difference with figure
}

@InterfaceType()
@InputType("HomePhotos")
export abstract class IHomePhotos{
	@Field(()=> [IPhoto] )
	sliders: IPhoto[]

	@Field(()=> [IPhoto] )
	banners: IPhoto[]
}

