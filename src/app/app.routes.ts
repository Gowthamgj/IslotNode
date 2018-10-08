
import { Route} from '@angular/router';
export const routes: Route[] = [
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {
    path: 'interviewer',
    loadChildren: 'app/interviewer/interviewer.module#InterviewerModule'
  },
    {
      path: '',
      loadChildren: 'app/registration/registration.module#RegistrationModule'
    },
    
];
