import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

  public show(value: any): void {
    console.log(value);
  }
}
