import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DislikePostDto {
  @IsString()
  @IsNotEmpty()
  user_uuid: string;
}

export class DislikePostParamsDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  id: number;
}
