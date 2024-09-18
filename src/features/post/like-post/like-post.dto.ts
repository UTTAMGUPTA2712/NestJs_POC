import { Type } from 'class-transformer';
import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Reaction } from 'src/domain/post/value-objects/reactions.enum';

export class LikePostDto {
  @IsString()
  @IsNotEmpty()
  user_uuid: string;

  @IsIn(Reaction.getValues())
  @IsNotEmpty()
  reaction: Reaction;
}

export class LikePostParamsDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  id: number;
}
