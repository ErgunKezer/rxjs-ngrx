import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../../state/book-list/books.model';

@Component({
    selector: 'app-book-collection',
    templateUrl: './book-collection.component.html',
    styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent {
    @Input() books: ReadonlyArray<Book | undefined> | null = [];
    @Output() remove = new EventEmitter<string>();
}
