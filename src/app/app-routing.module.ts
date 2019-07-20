import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailySchedulerComponent } from './scheduler/daily-scheduler/daily-scheduler.component';

const routes: Routes = [
  { path: 'daily-scheduler', component: DailySchedulerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
