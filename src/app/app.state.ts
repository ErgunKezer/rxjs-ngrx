import { Book } from './src/app/state/book-list/books.model';
import { ScoreBoardState } from './src/app/state/scoreboard/scoreboard.model';

export interface AppState {
    books: ReadonlyArray<Book>;
    collection: ReadonlyArray<string>;
    game: ScoreBoardState;
}
