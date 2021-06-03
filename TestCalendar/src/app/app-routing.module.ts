import { GroupComponent } from './group/group.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { TestarSigninComponent } from './testar-signin/testar-signin.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { BdP3Component } from './bd-p3/bd-p3.component';
import { PdsP3Component } from './pds-p3/pds-p3.component';
import { BdComponent } from './bd/bd.component';
import { PdsComponent } from './pds/pds.component';
import { NewEventComponent } from './new-event/new-event.component';
import { IhcP3Component } from './ihc-p3/ihc-p3.component';
import { IhcComponent } from './ihc/ihc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CoursesComponent } from './courses/courses.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'new_event', component: NewEventComponent},
  { path: 'create_group', component: CreateGroupComponent},
  { path: 'ihc', component: IhcComponent},
  { path: 'pds', component: PdsComponent },
  { path: 'bd', component: BdComponent },
  { path: 'group', component: GroupComponent},
  //{ path: 'IHC P3', component: IhcP3Component},
  { path: 'pds_p3', component: PdsP3Component},
  { path: 'bd_p3', component: BdP3Component},
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'mycourses', component: CoursesComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'testar-signin', component: TestarSigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
