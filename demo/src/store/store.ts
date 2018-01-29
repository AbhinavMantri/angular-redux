import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";

import * as toDoReducer from "./reducers/Todo.reducer";
import * as colorReducer from './reducers/Color.reducer';

import * as colorEffects from './effects/Color.effect';
//import {createStore, applyMiddleware} from 'redux';
//import thunk from 'redux-thunk';
// import {ActionReducerMap, createSelector, createFeatureSelector, ActionReducer,MetaReducer} from '@ngrx/store';

// import reducers from '../reducers/reducers';

// const middleWare = applyMiddleware(thunk);

// export default createStore(reducers,middleWare);
// import { ToDo } from '../models/ToDo';

// export interface IAppStore {
//     todoList: ToDo[]
//     //lastupdateDate: Date
// }

// export const INITIAL_STATE = {
//     todoList: []
//     //lastupdateDate: null
// }

export interface IAppStore {
    todos: toDoReducer.ToDoState,
    colors: colorReducer.ColorState
}

export const reducers: ActionReducerMap<IAppStore> = {
    todos: toDoReducer.reducer,
    colors: colorReducer.reducer
}

export const effects: any[] = [colorEffects.ColorEffects];

export const getAppStore = createFeatureSelector<IAppStore>('appStore');

export const getToDoState = createSelector(getAppStore, (state: IAppStore) => state.todos);
export const getColorState = createSelector(getAppStore, (state: IAppStore) => state.colors);

export const getAllToDos = createSelector(getToDoState, toDoReducer.getToDos);

export const getColorsEntities = createSelector(getColorState, colorReducer.getColorsEntities);
export const getAllColors = createSelector(getColorsEntities,(entities) => Object.keys(entities).map(id => entities[id]));