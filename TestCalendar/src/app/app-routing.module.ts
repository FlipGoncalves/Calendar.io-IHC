import { NewEventComponent } from './new-event/new-event.component';
import { IhcP3Component } from './ihc-p3/ihc-p3.component';
import { IhcComponent } from './ihc/ihc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: 'new_event', component: NewEventComponent},
  { path: 'ihc', component: IhcComponent},
  { path: 'ihc_p3', component: IhcP3Component},
  { path: '', component: CoursesComponent},
  { path: 'home', component: CalendarComponent },
  { path: 'mycourses', component: CoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
