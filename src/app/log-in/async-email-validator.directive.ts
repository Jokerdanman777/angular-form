import { Directive } from '@angular/core';
import { FormGroup, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Directive({
  selector: '[formAsyncEmailValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useValue: asyncEmailValidator,
      multi: true
    }
  ]
})
export class AsyncEmailValidatorDirective {

}

export function asyncEmailValidator(control: FormGroup): Observable<{ [key: string]: string } | null> {
  const value: string = control.value || '';
  const valid: boolean = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
 return Observable.of(
    valid
    ? null
    : {emailError: 'Некорректный email'}
 )
    .delay(3000);
}