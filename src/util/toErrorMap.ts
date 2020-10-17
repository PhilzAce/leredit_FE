import { FieldError } from '../generated/graphql';

export const toErrorMap = (errors: FieldError[]) => {
  console.log(errors, "there is something we are sure we can do about the errors that we are getting ")
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });
  return errorMap;
};
