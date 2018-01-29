import {Action} from '@ngrx/store';

import {Constants} from '../../constants/AppConstants';

export class AddToDo implements Action {
    readonly type = Constants.actionTypes.ADD_TODO;
    
    constructor(public payload: any) {} 
}

export class DeleteToDo implements Action {
    readonly type = Constants.actionTypes.DELETE_TODO;
    
    constructor(public payload: any) {} 
}

export type ToDoAction = AddToDo | DeleteToDo;