import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/observable';
import { Store } from '@ngrx/store';

import { EventList } from './../../model/event.model';
import { AppState } from './../../app.state';
import * as EventsAction from './../../actions/event.actions';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  eventLists: Observable<EventList[]>;
  eventComplete: Observable<EventList[]>;

  constructor(private store: Store<AppState>) {

    this.eventLists = store.select('Events');

    this.eventComplete = this.eventLists.pipe(map(items => items.filter(data => data.status === 'Completed')));

  }

  ngOnInit() {
  }

}
