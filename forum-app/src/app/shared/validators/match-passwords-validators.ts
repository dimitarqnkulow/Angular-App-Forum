import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  pass: string,
  rePass: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const password = group.get(pass);
    const rePassword = group.get(rePass);

    return password?.value === rePassword?.value
      ? null
      : { matchPasswordsValidator: true };
  };
}
