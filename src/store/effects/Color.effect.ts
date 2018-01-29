import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';
import {switchMap, map, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

import {Constants} from '../../constants/AppConstants';
import {ColorService} from '../../services/ColorService';
import * as colorAction from '../actions/Color.action';



@Injectable()
export class ColorEffects {
    constructor(private action$: Actions, private colorService: ColorService){};

    @Effect() 
    loadColors$ = this.action$.ofType(Constants.actionTypes.LOAD_COLORS)
    .pipe(
        switchMap(() => {
            return this.colorService.getColors()
            .pipe(
                map(colors => new colorAction.LoadColors_Success(colors)),
                catchError(error=> of(new colorAction.LoadColors_Fail(error)))
            )
        })
    );
}