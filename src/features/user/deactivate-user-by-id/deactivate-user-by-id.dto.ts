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

export class DeactivateUserByIdDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

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
