import { IsNotEmpty, IsString } from 'class-validator';

export class FindFilteredPostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  user_uuid: string;
}
