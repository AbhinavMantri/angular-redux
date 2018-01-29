import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';

import * as actions from '../store/actions/Todo.action';
import {IAppStore} from '../store/store';

@Injectable()
export class ToDoAction {
    constructor(private store: Store<IAppStore>) {}
    
    public AddToDo(text) {
        this.store.dispatch(new actions.AddToDo(text));
    }

    public DeleteToDo(id) {
        this.store.dispatch(new actions.DeleteToDo(id));
    }
}


