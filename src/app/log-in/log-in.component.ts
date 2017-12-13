import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'form-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public constructor(
    private _router: Router
  ) { }

  public ngOnInit(): void {
  }

  public login(form: FormGroup): void {
    this._router.navigate(['/success']);
  }
}
