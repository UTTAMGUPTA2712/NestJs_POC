import { IsNotEmpty, IsString } from 'class-validator';

export class FindFilteredPostDto {
  @IsString()
  @IsNotEmpty()
  user_uuid: string;
}
