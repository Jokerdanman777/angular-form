import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[formTextOnly]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: textValidator,
      multi: true
    }
  ]
})
export class TextOnlyDirective {

}

export function textValidator(control: FormControl): { [key: string]: string } | null {
  const value: string = control.value || '';
  const valid: boolean = /^[a-zA-Z]*$/.test(value);
  return valid
    ? null
    : { textOnly: 'Поле не может содержать цифры' };
}