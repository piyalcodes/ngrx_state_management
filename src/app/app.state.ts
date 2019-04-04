import { EventList } from './model/event.model';

export interface AppState {
   readonly events: EventList[];
}