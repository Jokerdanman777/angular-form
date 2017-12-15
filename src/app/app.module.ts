import { LogInService } from './log-in/log-in.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { SuccessComponent } from './success/success.component';
import { SuccessGuardService } from './success/success-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SuccessGuardService,
    LogInService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
