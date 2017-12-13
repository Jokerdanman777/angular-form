import { Route } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { SuccessGuardService } from './success/success-guard.service';

export const routes: Route[] = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      loadChildren: './log-in/log-in.module#LogInModule'
    },
    {
      path: 'signup',
      loadChildren: './sign-up/sign-up.module#SignUpModule'
    },
    {
      path: 'success',
      component: SuccessComponent,
      // canActivate: [SuccessGuardService]
    },
    {
      path: '**',
      redirectTo: 'signup'
    }
];