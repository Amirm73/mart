// import { createReadStream } from 'fs'
import { Stream } from "stream";
import { Mimetype } from "./imageMimetype.enum";

export interface IUploadedImage{
	filename: string,
	mimetype: Mimetype,
	encoding: string,
	createReadStream:  () => Stream
}