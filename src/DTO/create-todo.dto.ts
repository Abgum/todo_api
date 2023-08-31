import {IsNotEmpty,MaxLength, IsDate,IsOptional} from 'class-validator'


export class CretateTodoDto{

    @IsNotEmpty()
    @MaxLength(15, {message:'Max karaktere ulaştın'})
    title:string;

    @IsNotEmpty()
    description:string


}