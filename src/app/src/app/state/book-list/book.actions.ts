import { createAction, props } from '@ngrx/store';
import { Book } from './books.model';

export const actionTypes = {
    addBook: '[Book List] Add Book',
    removeBook: '[Book Collection] Remove Book',
    retrieveBookList: '[Book List/API] Retrieve Books Success',
};

export const addBook = createAction(
    actionTypes.addBook,
    props<{ bookId: string }>()
);
export const removeBook = createAction(
    actionTypes.removeBook,
    props<{ bookId: string }>()
);
export const retrieveBookList = createAction(
    actionTypes.retrieveBookList,
    props<{ books: ReadonlyArray<Book> }>()
);
