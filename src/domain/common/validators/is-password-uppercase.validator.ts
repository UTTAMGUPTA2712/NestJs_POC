import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsPasswordWithUppercaseConstraint
  implements ValidatorConstraintInterface
{
  validate(password: string) {
    return /[A-Z]/.test(password); // Check if the password contains at least one uppercase letter
  }

  defaultMessage() {
    return 'Password must contain at least one uppercase letter';
  }
}

export function IsPasswordWithUppercase(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsPasswordWithUppercaseConstraint,
    });
  };
}
