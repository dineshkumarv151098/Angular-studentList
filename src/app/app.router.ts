import { Routes, RouterModule } from '@angular/router';  
import { CanActivateGuard } from './guard/can-activate.guard';
import { LogInComponent } from './log-in/log-in.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentListComponent } from './student-list/student-list.component';
  
const appRoutes: Routes = [  
    { path: '', redirectTo: 'main', pathMatch: 'full' }, 
    { path: 'main', component: MainComponent},    
    { path: 'studentList', component: StudentListComponent,canActivate:[CanActivateGuard] },
    { path: 'logIn', component: LogInComponent },
    { path: '**', component: PageNotFoundComponent },  
];  
  
export const routing = RouterModule.forRoot(appRoutes);