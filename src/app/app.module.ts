import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '../mateial.module';

import { booksReducer } from './src/app/state/book-list/books.reducer';
import { collectionReducer } from './src/app/state/book-list/collection.reducer';
import { BookService } from './src/app/services/books.service';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BookListComponent } from './src/app/components/book-list/book-list.component';
import { BookCollectionComponent } from './src/app/components/book-collection/book-collection.component';
@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        BookCollectionComponent,
        BookListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        StoreModule.forRoot({
            books: booksReducer,
            collection: collectionReducer,
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
    ],
    providers: [BookService],
    bootstrap: [AppComponent],
})
export class AppModule {}
