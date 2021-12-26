import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
    selectBookCollection,
    selectBooks,
} from './src/app/state/book-list/books.selector';
import {
    retrieveBookList,
    addBook,
    removeBook,
} from './src/app/state/book-list/book.actions';
import { BookService } from './src/app/services/books.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'rxjs-ngrx';
    books$ = this.store.select(selectBooks);
    bookCollection$ = this.store.select(selectBookCollection) || [];
    constructor(private bookService: BookService, private store: Store) {}
    ngOnInit(): void {
        this.bookService
            .getBooks()
            .subscribe((books) =>
                this.store.dispatch(retrieveBookList({ books }))
            );
    }
    onAdd(bookId: string) {
        this.store.dispatch(addBook({ bookId }));
    }
    onRemove(bookId: string) {
        this.store.dispatch(removeBook({ bookId }));
    }
}
