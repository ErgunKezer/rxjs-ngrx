import { Book } from './src/app/state/book-list/books.model';

export interface AppState {
    books: ReadonlyArray<Book>;
    collection: ReadonlyArray<string>;
}
