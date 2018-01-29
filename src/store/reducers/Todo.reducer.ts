import {ToDo} from '../../models/ToDo';

import * as toDoAction from '../actions/Todo.action';
import {Constants} from '../../constants/AppConstants';

export interface ToDoState extends Array<ToDo> {};

export const INITIAL_STATE: ToDoState = [];

const getNextId = (toDos) => {
    return toDos.reduce((maxId, toDo) => Math.max(toDo.id, maxId), -1) + 1;
}

export function reducer(state: ToDoState = INITIAL_STATE, action: toDoAction.ToDoAction): ToDoState {
    switch(action.type) {
        case Constants.actionTypes.ADD_TODO: {
            const text = action.payload;
            return [
                ...state,
                {
                    id: getNextId(state),
                    text,
                    completed: false
                }   
            ];   
        }
        case Constants.actionTypes.DELETE_TODO:
            return state.filter(toDo => toDo.id != action.payload); 
    }
    return state;
}

export const getToDos = (state: ToDoState) => state;