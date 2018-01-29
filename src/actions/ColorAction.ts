import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {Constants} from '../constants/AppConstants';
import {IAppStore} from '../store/store';
import * as actions from '../store/actions/Color.action';

@Injectable()
export class ColorAction {
    constructor(private store: Store<IAppStore>) {}
    
    public LoadColors() {
        this.store.dispatch(new actions.LoadColors(''));
    }
}