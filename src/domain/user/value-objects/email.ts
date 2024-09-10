import { BadRequestException } from '@nestjs/common';
import { validateSync, IsEmail, Matches } from 'class-validator';

export class Email {
  @IsEmail()
  @Matches(/@zenmonk\.tech$/)
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
    this.validate();
  }

  private validate() {
    const errors = validateSync(this);
    if (errors.length > 0) {
      throw new BadRequestException('Invalid email');
    }
  }

  getValue() {
    return this.value;
  }
}
