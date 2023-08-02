import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { appEmailValidator } from './app-email-validator';
import { DEFAULT_EMAIL_DOMAINS } from '../constants';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AppEmailDirective,
      multi: true,
    },
  ],
})
export class AppEmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = [];

  validator: ValidatorFn = () => null;
  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnInit(): void {
    this.validator = appEmailValidator(DEFAULT_EMAIL_DOMAINS);
  }
  ngOnChanges(changes: SimpleChanges): void {
    const currentEmailChanges = changes['appEmail'];

    if (currentEmailChanges) {
      this.validator = appEmailValidator(currentEmailChanges.currentValue);
    }
  }
}
