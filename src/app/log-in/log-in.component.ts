import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInService } from './log-in.service';
@Component({
  selector: 'form-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public login$: Observable<FormGroup>;

  public constructor(
    private _router: Router,
    private _logInService: LogInService
  ) { }

  public ngOnInit(): void {
  }

  public isLogged(form: FormGroup): void {
    const user: User = {
      login: form.controls.mail.value,
      password: form.controls.password.value
    };
    this._logInService.login(user);
    this._router.navigate(['/success']);
  }
}
