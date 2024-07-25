import { IsNotEmpty, IsString } from 'class-validator';

export class DislikePostDto {
  @IsString()
  @IsNotEmpty()
  user_uuid: string;
}
