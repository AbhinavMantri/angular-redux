import {Action} from '@ngrx/store';

import {Constants} from '../../constants/AppConstants';
import {Color} from '../../models/Color';

export class LoadColors implements Action {
    readonly type = Constants.actionTypes.LOAD_COLORS;

    constructor(public payload: any){};
}

export class LoadColors_Success implements Action {
    readonly type = Constants.actionTypes.LOAD_COLORS_SUCCESS;
    
    constructor(public payload: Color[]){};
}


export class LoadColors_Fail implements Action {
    readonly type = Constants.actionTypes.LOAD_COLORS_FAIL;

    constructor(public payload: any){};
}

export type ColorAction = LoadColors | LoadColors_Success | LoadColors_Fail;