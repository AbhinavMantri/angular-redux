import {Color} from '../../models/Color';

import * as colorAction from '../actions/Color.action';
import {Constants} from '../../constants/AppConstants';

export interface ColorState {
    entities: {[id: number]: Color},
    loading: boolean,
    loaded: boolean
};

export const INITIAL_STATE: ColorState = {
    entities: {},
    loading: false,
    loaded: false
};

const getNextId = (toDos) => {
    return toDos.reduce((maxId, toDo) => Math.max(toDo.id, maxId), -1) + 1;
}

export function reducer(state: ColorState = INITIAL_STATE, action: colorAction.ColorAction): ColorState {
    switch(action.type) {
        case Constants.actionTypes.LOAD_COLORS: {
            return {
                ...state,
                loading: true
            }
        }
        case Constants.actionTypes.LOAD_COLORS_SUCCESS: {
            const colors = action.payload.colors;

            const entities = colors.reduce((entities: {[id: number]: Color}, color: Color) => {
                return {
                    ...entities,
                    [color.id]: color
                }
            },{
                ...state.entities
            });
            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            }
        }
        case Constants.actionTypes.LOAD_COLORS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false
            }    
    }
    return state;
}

export const getColorsEntities = (state: ColorState) => state.entities;
export const getColorLoading = (state: ColorState) => state.loading;
export const getColorLoaded = (state: ColorState) => state.loaded;
