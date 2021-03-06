import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './event-view-routing.module';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  declarations: [EventListComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class EventViewModule { }
