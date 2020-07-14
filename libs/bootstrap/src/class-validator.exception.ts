import { ValidationError } from '@nestjs/common';
import { first } from 'lodash';

export function handleValidationException(errors: ValidationError[]) {
  const message = first(
    errors.map(error => first(Object.values(error.constraints))),
  );
  return new ValidationException(message);
}
