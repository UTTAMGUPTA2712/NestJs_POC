import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { Reaction } from 'src/domain/post/value-objects/reactions.enum';

export class LikePostDto {
  @IsString()
  @IsNotEmpty()
  user_uuid: string;

  @IsIn(Reaction.getValues())
  @IsNotEmpty()
  reaction: Reaction;
}
