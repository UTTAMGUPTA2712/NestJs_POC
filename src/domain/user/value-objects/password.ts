import { BadRequestException } from '@nestjs/common';
import { IsString, Length, validateSync } from 'class-validator';
import { IsPasswordWithUppercase } from 'src/domain/common/validators/is-password-uppercase.validator';

export class Password {
  @IsString()
  @Length(6, 128)
  @IsPasswordWithUppercase({
    message: 'Password must contain at least one uppercase letter',
  })
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
    this.validate();
  }

  private validate() {
    const errors = validateSync(this);
    if (errors.length > 0) {
      throw new BadRequestException('Invalid password');
    }
  }

  getValue() {
    return this.value;
  }
}
