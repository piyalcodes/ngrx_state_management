import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';



const routes: Routes = [
  { path: '', component: EventListComponent }
];

//export class EventViewRoutingModule { }
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
