import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { Content } from 'src/domain/post/value-objects/content';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  // @ValidateNested()
  @Transform((data) => new Content(data.value).getValue())
  content: string;

  @IsString()
  @IsNotEmpty()
  user_uuid: string;
}
