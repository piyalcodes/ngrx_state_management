import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { EventList } from '../model/event.model';

export const ADD_EVENT = 'ADD';
export const REMOVE_EVENT = 'REMOVE';
export const UPDATE_EVENT = 'UPDATE';


export class AddEvents implements Action {

   readonly type = ADD_EVENT;

   constructor(public payload: EventList) {

   }
}

export class RemoveEvents implements Action {

   readonly type = REMOVE_EVENT;

   constructor(public payload: number) {

   }
}

export class UpdateEvents implements Action {

   readonly type = UPDATE_EVENT;

   constructor(public payload: number) {

   }
}

export type Action = AddEvents | RemoveEvents | UpdateEvents;