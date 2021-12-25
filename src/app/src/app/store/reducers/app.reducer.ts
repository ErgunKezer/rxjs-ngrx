import { initialState } from '../app.state';
import { AppActions } from '../actions/app.actions';
import { ADD_INGREDIENT } from '../actions/app.action-name';

export function appReducer(state = initialState, action: AppActions) {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload],
            };
        default:
            return state;
    }
}
