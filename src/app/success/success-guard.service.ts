import { LogInService } from './../log-in/log-in.service';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class SuccessGuardService implements CanActivate {

  public login: any;

  public constructor(
    private _router: Router,
    private _logInService: LogInService
  ) { }

  public canActivate(): boolean {
    this._logInService.login$.subscribe( (item:any) => {
      if (item) {
       return this.login = Observable.of(true);
      } else {
        this._router.navigate(['']);
        return this.login = Observable.of(false);
      }
    });
    return this.login;

  }
}
