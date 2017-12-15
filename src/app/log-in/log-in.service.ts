import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LogInService {

  public login$: Subject<User> = new Subject<User>();

  public constructor() { }

  public login(user: User): void {
    this.login$.next(user);
  }
}
