import { ActionReducerMap } from '@ngrx/store';
import { InitialState } from '../../model/app.model';
import { appReducer } from './app.reducer';

export const rootReducer = {};

export interface AppState {
    main: InitialState;
}

export const reducers: ActionReducerMap<AppState, any> = {
    main: appReducer,
};
