import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

export class ParentInformationDto {
  @IsString()
  @IsNotEmpty()
  father: string;

  @IsString()
  @IsNotEmpty()
  mother: string;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsObject()
  @ValidateNested()
  @Type(() => ParentInformationDto)
  parent_information: ParentInformationDto;
}
