import { BadRequestException } from '@nestjs/common';
import { IsString, Length, validateSync } from 'class-validator';

export class Name {
  @IsString()
  @Length(1, 50)
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
    this.validate();
  }

  private validate() {
    const errors = validateSync(this);
    if (errors.length > 0) {
      throw new BadRequestException('Invalid name');
    }
  }

  getValue() {
    return this.value;
  }
}
