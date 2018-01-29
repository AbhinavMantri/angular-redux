import {combineReducers} from '@ngrx/store';
import toDoReducer from './ToDoReducer';

export default combineReducers({
    todos: toDoReducer
});
