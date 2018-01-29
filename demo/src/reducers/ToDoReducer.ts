import {Constants} from '../constants/AppConstants';

import {ToDo} from '../models/ToDo';


interface ToDoState extends Array<ToDo> {};

const INITIAL_STATE = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0
    }
];

const getNextId = (toDos) => {
  return toDos.reduce((maxId, toDo) => Math.max(toDo.id, maxId), -1) + 1;
}



export default function toDoReducer(state: ToDoState = INITIAL_STATE, action): ToDoState {
    let nextState: ToDoState;
    switch(action.type) {
        case Constants.actionTypes.ADD_TODO:
            nextState = [
                ...state,
                {
                    id: getNextId(state),
                    text: action.text,
                    completed:false
                }
            ];
            break;
        case Constants.actionTypes.DELETE_TODO:
            nextState = state.filter(toDo => toDo.id != action.id);
            break;            
    }

    return nextState;
}
