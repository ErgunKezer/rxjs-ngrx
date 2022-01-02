import { createAction, props } from '@ngrx/store';
import { ScoreBoardState } from './scoreboard.model';

export const actionTypes = {
    homeScore: '[Scoreboard] Home Score',
    awayScore: '[Scoreboard] Away Score',
    resetScore: '[Scoreboard] Score Reset',
    setScore: '[Scoreboard] Score Reset',
};

export const homeScore = createAction(actionTypes.homeScore);
export const awayScore = createAction(actionTypes.awayScore);
export const resetScore = createAction(actionTypes.resetScore);
export const setScore = createAction(
    actionTypes.setScore,
    props<{ game: ScoreBoardState }>()
);
