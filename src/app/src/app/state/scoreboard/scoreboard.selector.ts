import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ScoreBoardState } from './scoreboard.model';

export const selectGame = createFeatureSelector<ScoreBoardState>('game');

export const selectAwayScore = createSelector(
    selectGame,
    (score: ScoreBoardState) => score.away
);

export const selectHomeScore = createSelector(
    selectGame,
    (score: ScoreBoardState) => score.home
);
