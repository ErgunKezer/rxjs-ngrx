import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { appReducer } from './src/app/store/reducers/app.reducer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'rxjs-ngrx';
    constructor(private store: Store) {
        this.store.addReducer('main', appReducer);
    }
}
