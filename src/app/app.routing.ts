// import { SignUpComponent } from './sign-up/sign-up.component';
// import { LogInComponent } from './log-in/log-in.component';
import { Route } from '@angular/router';

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
    }
];