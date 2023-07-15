import { ValidatorFn } from '@angular/forms';

export function appEmailValidator(domains: string[]): ValidatorFn {
  //[^@]{6,}@gmail\.(bg|com)$
  const domainString = domains.join('|');
  const regExp = new RegExp(`[^@]{6,}@gmail\.(${domainString})$`);
  return (control) => {
    return control.value === '' || regExp.test(control.value)
      ? null
      : { appEmailValidator: true };
  };
}
