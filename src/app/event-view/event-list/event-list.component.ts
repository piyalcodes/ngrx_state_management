import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
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
  eventPending: Observable<EventList[]>;
  eventComplete: Observable<EventList[]>;
  constructor(private store: Store<AppState>) {

    this.eventLists = store.select('Events');
    this.eventPending = this.eventLists.pipe(map(items => items.filter(data => data.status === 'Pending')));
    this.eventComplete = this.eventLists.pipe(map(items => items.filter(data => data.status === 'Completed')));
  }

  addEvents(name, url, status) {
    this.store.dispatch(new EventsAction.AddEvents({ name: name, url: url, status: status }))
  }

  removeEvent(index) {
    this.store.dispatch(new EventsAction.RemoveEvents(index));
    this.eventLists = this.store.select('Events');
    this.eventPending = this.eventLists.pipe(map(items => items.filter(data => data.status === 'Pending')));
    this.eventComplete = this.eventLists.pipe(map(items => items.filter(data => data.status === 'Completed')));
  }

  completeEvent(index) {

    this.eventPending = this.eventLists.pipe(map(items => items.filter(data => data.status === 'Pending')));
    this.eventComplete = this.eventLists.pipe(map(items => items.filter(data => data.status === 'Completed')));

    this.store.dispatch(new EventsAction.UpdateEvents(index));
  }

  ngOnInit() { }

}
