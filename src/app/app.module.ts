import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../mateial.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { StoreModule } from '@ngrx/store';
import { booksReducer } from './src/app/book/books.reducer';
@NgModule({
    declarations: [AppComponent, SidenavComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        StoreModule.forRoot(booksReducer),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
