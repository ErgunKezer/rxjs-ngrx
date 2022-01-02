import { createReducer, on } from '@ngrx/store';
import * as ScoreboardPageActions from './scoreboard.actions';
import { ScoreBoardState } from './scoreboard.model';

export const initialState: ScoreBoardState = {
    home: 0,
    away: 0,
};

export const scoreboardReducer = createReducer(
    initialState,
    on(ScoreboardPageActions.homeScore, (state) => ({
        ...state,
        home: state.home + 1,
    })),
    on(ScoreboardPageActions.awayScore, (state) => ({
        ...state,
        away: state.away + 1,
    })),
    on(ScoreboardPageActions.resetScore, (_) => ({ home: 0, away: 0 })),
    on(ScoreboardPageActions.setScore, (_, { game }) => ({
        home: game.home,
        away: game.away,
    }))
);
