import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { MygroupsComponent } from './mygroups/mygroups.component';

const routes: Routes = [
  { path: 'home', component: CalendarComponent },
  { path: 'mygroups', component: MygroupsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
