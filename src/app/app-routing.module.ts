import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './event-view/event-view.module#EventViewModule' },
  { path: 'complete', loadChildren: './completed-events/completed-events.module#CompletedEventsModule' }
];
/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) */
//export class AppRoutingModule { }
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
