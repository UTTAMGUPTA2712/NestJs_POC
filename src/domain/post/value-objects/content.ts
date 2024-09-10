import { BadRequestException } from '@nestjs/common';
import { IsString, Length, validateSync } from 'class-validator';

export class Content {
  @IsString({ message: 'Content must be a string' })
  @Length(6, 128, { message: 'Content must be between 6 and 128 characters' })
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
    this.validate();
  }

  private validate() {
    const errors = validateSync(this);

    if (errors.length > 0) {
      throw new BadRequestException('Invalid content');
    }

    // any other validation here
  }

  getValue() {
    return this.value;
  }
}
