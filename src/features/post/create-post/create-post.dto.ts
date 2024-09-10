import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { Content } from 'src/domain/post/value-objects/content';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @Type(() => Content)
  @Transform(({ value }) => new Content(value))
  content: Content;

  @IsString()
  @IsNotEmpty()
  user_uuid: string;
}
