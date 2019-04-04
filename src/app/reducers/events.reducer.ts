import { Action } from '@ngrx/store';
import { EventList } from './../model/event.model';
import * as EventActions from './../actions/event.actions';
const initialEvent: EventList = {
      name: 'Send a mail',
      url: 'google.com',
      status: 'Pending'
}

export function reducer(state: EventList[] = [initialEvent], action: EventActions.Action) {

      switch (action.type) {

            case EventActions.ADD_EVENT:
                  return [...state, action.payload];

            case EventActions.REMOVE_EVENT:
                  state.splice(action.payload, 1)
                  return state;

            case EventActions.UPDATE_EVENT:

                  state.forEach((item, i) => {
                        if (i === action.payload) {
                              item.status = "Completed";
                        }
                  });

                  return state;

            default:
                  return state;

      }
}