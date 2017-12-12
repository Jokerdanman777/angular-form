import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AsyncEmailValidatorDirective } from './async-email-validator.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LogInComponent
      },
    ])
  ],
  declarations: [LogInComponent, AsyncEmailValidatorDirective]
})
export class LogInModule { }
